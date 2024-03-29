import Swal from 'sweetalert2';
// import * as cryptojS from 'crypto-js';
import toastr from 'toastr';
import Cookie from 'js-cookie';
import jwt from 'jsonwebtoken';


const state = {
  UserFullName: '',
  UserAvatar: '',
  UserGender: '',
  is_user_authenticated: false,
  is_form_submited: false,
  is_login_form_submited: false,
  is_avarat_loaded: false,
  user_id: ''
};

const getters = {
  GetUserFullName(state) {
    return state.UserFullName;
  },
  GetUserAvatar(state) {
    return state.UserAvatar;
  },
  GetUserGender(state) {
    return state.UserGender;
  },
  IsUserAuthenticated(state) {
    return state.is_user_authenticated;
  },
  IsFormSubmitted(state){
    return state.is_form_submited;
  },
  isLoginFormSubmitted(state){
    return state.is_login_form_submited;
  },
  GetUserID(state){
    return state.user_id;
  },
  IsAvatarLoaded(state){
    return state.is_avarat_loaded;
  }
};

const mutations = {
  CheckAuth(state){
    // check if cookie is set and not expired
    if (Cookie.get(process.env.AUTH_COOKIE_NAME)){
      const token = Cookie.get(process.env.AUTH_COOKIE_NAME);
      decryptTokenFunc(state,process.env.AUTH_SECRET_KEY , token);
    } else {
      state.is_user_authenticated = false;
      state.user_id = '';
    }
  },

  SetAuthCookie(state, loginResult) {
    const expireIn = new Date((Date.now() + 10800) * 1000);
    Cookie.set(process.env.AUTH_COOKIE_NAME, loginResult, {
      expires: expireIn
    },null,null,true,true);
  },

  SetUserFullName(state, userFullName) {
    state.UserFullName = userFullName;
  },

  SetUserMeta(state, userMeta) {
    if (userMeta.UserAvatar !== null) state.UserAvatar = process.env.UPLOAD_DIR + 'users_images/' + userMeta.UserAvatar.value;
    if (userMeta.UserGender !== null) state.UserGender = userMeta.UserGender.value;
  },

  SetAvatarLoaded(state, is_loaded) {
    state.is_avarat_loaded=is_loaded;
  },

  SetUserAuthenticated(state, token_data) {
    if (Cookie.get(process.env.AUTH_COOKIE_NAME)){
      const {secret_key , token} = token_data;
      decryptTokenFunc(state,secret_key,token);
    } else {
      state.is_user_authenticated = false;
      state.user_id = '';
    }
  },

  SignOut() {
    Cookie.remove(process.env.AUTH_COOKIE_NAME);
    state.is_user_authenticated = false;
    state.user_id = '';
    state.UserAvatar = '';
    this.$router.push('/');
  }

};

const actions = {
  RegisterUser(vuexContext, reg_data) {
    this.$axios
      .$post("auth/register", reg_data)
      .then(response => {
        if (response.userID) {
          Swal.fire({
            title: 'Success',
            text: 'ثبت نام با موفقیت انجام شد',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.$router.push('/login');
        } else {
          alert('خطا در انجام عملیات!!!');
        }
      })
      .catch(e => console.log(e));
  },

  LoginUser(vuexContext, loginData) {
    const axios = this.$axios;
    const router = this.$router;

    return new Promise(function (resolve,reject) {
      axios.post('auth/login', loginData)
      .then(response => {
        const result = response.data.result;
        const token = response.data.token;

        if (result === "NotFound" || result === "ValidationError" ) {
          Swal.fire({
            text: 'کاربری با مشخصات وارد شده یافت نشد',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
        if (result === "Done") {
          const resolve_data={
            'token': token,
            'context': vuexContext
          };
          resolve(resolve_data);
        } else {
          reject();
        }
      });
    }).then(function (resolve_data) {
      const tokenData = {"secret_key":process.env.AUTH_SECRET_KEY, "token":resolve_data.token};

      resolve_data.context.commit("SetAuthCookie", resolve_data.token);
      resolve_data.context.commit("SetUserAuthenticated", tokenData);
      setTimeout(function () {
        const userData = {"id": state.user_id};
        resolve_data.context.dispatch("GetUserById",userData);
      } , 1500);

      toastr.success('ورود موفق','تبریک');
      router.push('dashboard');
    }).catch(function (err) {
      console.log('Login Error',err);
    });
  },

  GetUserById(vuexContext,user_data){
    this.$axios.post('auth/getuserbyid', user_data)
      .then(response => {
        if (response.data.body.User !== null  ) vuexContext.commit("SetUserFullName", response.data.body.User.name);
        if (response.data.body.UserMeta !== null  ) {
          vuexContext.commit("SetUserMeta", response.data.body.UserMeta);
        } else {
          vuexContext.commit("SetUserMeta", null);
        }
        vuexContext.commit("SetAvatarLoaded",true);
      });
  },


  CheckAuth(vuexContext){
    vuexContext.commit("CheckAuth");
  },

  SignOutUser(vuexContext) {
    vuexContext.commit("SignOut");
  },

  uploadImage(context , imageData){
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    };
    axios.post('/uploadImg' , imageData, config)
      .then(res => {
        if (res.data.result === 'Done') {
          const data = {
            userID: state.user_id,
            image : res.data.image
          };
          axios.post('/update_meta_image' , data )
            .then(resp =>{
              if (resp.data.result === 'Done') {
                alert('آپلود موفق.');
              }
            })
        }
      })
  },
  profileSubmit(context , profileData){
    const data = {
      userID: state.user_id,
      name : profileData.name,
      gender : profileData.gender
    };
    axios.post('/update_user' , data)
      .then(res =>{
        if (res.data.result === 'Done') {
          alert('اطلاعات با موفقیت ویرایش شد :) ');
          context.commit("SetUserFullName", res.data.user_data.User.name);
          if (res.data.user_data.UserMeta !== null  ) {
            context.commit("SetUserMeta", res.data.user_data.UserMeta);
          } else {
            context.commit("SetUserMeta", null);
          }
          context.commit("SetAvatarLoaded",true);
        }
      })

  }
};


function decryptTokenFunc(state,secret_key,token){
  jwt.verify(token, secret_key, (err, user) => {
    if (!err) {
      state.user_id = user.data.id;
      state.is_user_authenticated = (state.user_id !== '');
    }
  });
}

export default {
  state,
  getters,
  mutations,
  actions
};

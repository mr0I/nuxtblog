import Vue from 'vue';
import Swal from 'sweetalert2';
// import {router} from '../../main';
// import * as cryptojS from 'crypto-js';
// import axios from 'axios';
// import toastr from 'toastr';


const state = {
  UserFullName: '',
  UserAvatar: '',
  UserGender: '',
  IsUserAuthenticated: false,
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
    return state.IsUserAuthenticated;
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
    if (Vue.cookie.get(process.env.VUE_APP_AUTH_COOKIE_NAME)){
      const token = Vue.cookie.get(process.env.VUE_APP_AUTH_COOKIE_NAME);
      decryptTokenFunc(process.env.VUE_APP_AUTH_SECRET_KEY , token);
    } else {
      state.IsUserAuthenticated = false;
      state.user_id = '';
    }
  },

  SetAuthCookie(state, loginResult) {
    let jsonLoginResult = JSON.parse(loginResult);

    let unix_timestamp = jsonLoginResult.expire_time;
    let expireIn = new Date(unix_timestamp * 1000);
    Vue.cookie.set(process.env.VUE_APP_AUTH_COOKIE_NAME, loginResult, {
      expires: expireIn
    },null,null,true,true);
  },

  SetUserFullName(state, userFullName) {
    state.UserFullName = userFullName;
  },

  SetUserMeta(state, userMeta) {
    if (userMeta.UserAvatar !== null) state.UserAvatar = process.env.VUE_APP_UPLOAD_DIR + 'users_images/' + userMeta.UserAvatar.value;
    if (userMeta.UserGender !== null) state.UserGender = userMeta.UserGender.value;
  },

  SetAvatarLoaded(state, is_loaded) {
    state.is_avarat_loaded=is_loaded;
  },

  SetUserAuthenticated(state, tokenData) {
    if (Vue.cookie.get(process.env.VUE_APP_AUTH_COOKIE_NAME)){
      const {secret_key , token} = tokenData;
      decryptTokenFunc(secret_key , token);
    } else {
      state.IsUserAuthenticated = false;
      state.user_id = '';
    }
  },

  SignOut() {
    Vue.cookie.delete(process.env.VUE_APP_AUTH_COOKIE_NAME);
    state.IsUserAuthenticated = false;
    state.user_id = '';
    state.UserAvatar = '';
    router.push('/');
  }

};

const actions = {
  RegisterUser(vuexContext, reg_data) {
    this.$axios
      .$post("auth/register", reg_data)
      .then(response => {
        // vuexContext.commit('addPost', {...createdPost, id: data.name})
        if (response.userID) {
          Swal.fire({
            title: 'Success',
            text: 'ثبت نام با موفقیت انجام شد',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          // state.is_form_submited = false;
          this.$router.push('/login');
        } else {
          alert('خطا در انجام عملیات!!!');
        }
      })
      .catch(e => console.log(e));
  },

  LoginUser(context, loginData) {
    return new Promise(function (resolve,reject) {
      axios.post('/login', loginData ,{
        headers:{
          Authorization: 'Bearer ' + Vue.cookie.get(process.env.VUE_APP_AUTH_COOKIE_NAME)
        }
      }).then(response => {
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
          const resoveData={
            'token': token,
            'context': context
          };
          resolve(resoveData);
        } else {
          reject();
        }
      });

    }).then(function (resolve_data) {
      const tokenData = {"secret_key":process.env.VUE_APP_AUTH_SECRET_KEY, "token":resolve_data.token};
      resolve_data.context.commit("SetAuthCookie", resolve_data.token);
      resolve_data.context.commit("SetUserAuthenticated", tokenData);
      const userData = {"id": state.user_id};
      Vue.http.post('GetUserById', userData)
        .then(response => {
          resolve_data.context.commit("SetUserFullName", response.body.User.name);
          if (response.body.UserMeta !== null  ) {
            resolve_data.context.commit("SetUserMeta", response.body.UserMeta);
          } else {
            resolve_data.context.commit("SetUserMeta", null);
          }
          resolve_data.context.commit("SetAvatarLoaded",true);
        });
      toastr.success('ورود موفق','تبریک');
      router.push({name:'dash'});
    }).catch(function () {
      console.log('Login Error');
    });
  },

  GetUserById(context , user_id){
    Vue.http.post('GetUserById', user_id)
      .then(response => {
        if (response.body.User !== null  ) context.commit("SetUserFullName", response.body.User.name);
        if (response.body.UserMeta !== null  ) {
          context.commit("SetUserMeta", response.body.UserMeta);
        } else {
          context.commit("SetUserMeta", null);
        }
        context.commit("SetAvatarLoaded",true);
      });
  },

  CheckUserLogin(context){
    context.commit("CheckAuth");
  },

  SignOutUser(context) {
    context.commit("SignOut");
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

function decryptTokenFunc(secret_key , token){
  let jsonToken = '';
  try {
    jsonToken = JSON.parse(token);
  } catch (e) {
    return false;
  }
  let encrypted = jsonToken.ciphertext;
  let salt = cryptojS.enc.Hex.parse(jsonToken.salt);
  let iv = cryptojS.enc.Hex.parse(jsonToken.iv);
  let key = cryptojS.PBKDF2(secret_key, salt, { hasher: cryptojS.algo.SHA512, keySize: 64/8, iterations: 999});
  let decrypted = cryptojS.AES.decrypt(encrypted, key, { iv: iv});
  state.user_id = decrypted.toString(cryptojS.enc.Utf8);
  state.IsUserAuthenticated = (state.user_id !== '');
}

export default {
  state,
  getters,
  mutations,
  actions
};

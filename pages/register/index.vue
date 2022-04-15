<template>
  <!-- content-Start -->
  <section class="main_content">
    <div class="container-fluid">
      <div class="row">
        <div style="width: 80%;margin:auto 10%;">
          <div class="card text-center">
            <div class="card-header">
              <h5>ثبت نام</h5>
            </div>
            <div class="card-body">
              <div class="formAdd">
                <form action="#" id="signupFrm" class="form-control" @submit.prevent="RegisterUser()"
                      method="post" style="border:none;">
                  <div class="d-flex flex-wrap justify-content-center">
                    <div class="input-group my-4 mr-sm-2 w-50">
                      <div class="input-group-prepend"><div class="input-group-text"><i class="material-icons">person</i></div></div>
                      <input type="text" class="form-control" placeholder="نام" name="name" v-model="formData.name">
                    </div>
                  </div>
                  <div class="d-flex flex-wrap justify-content-center">
                    <div class="input-group my-4 mr-sm-2 w-50">
                      <div class="input-group-prepend"><div class="input-group-text"><i class="material-icons">email</i></div></div>
                      <input type="text" class="form-control" placeholder="ایمیل*" v-model="formData.email">
                      <div class="errors w-100 p-2" v-if="errors.length">
                        <ul>
                          <li class="float-right text-danger" v-for="error in errors">{{ error.email }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-wrap justify-content-center">
                    <div class="input-group my-4 mr-sm-2 w-50">
                      <div class="input-group-prepend"><div class="input-group-text"><i class="material-icons">vpn_key</i></div></div>
                      <input type="password" class="form-control" placeholder="رمز عبور*" v-model="formData.password">
                      <div class="errors w-100 p-2" v-if="errors.length">
                        <ul>
                          <li class="float-right text-danger" v-for="error in errors">{{ error.password }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-wrap justify-content-center">
                    <div class="input-group my-4 mr-sm-2 w-50">
                      <div class="input-group-prepend"><div class="input-group-text"><i class="material-icons">vpn_key</i></div></div>
                      <input type="password" class="form-control" placeholder="تکرار رمز عبور*" v-model="formData.password_confirmation">
                      <div class="errors w-100 p-2" v-if="errors.length">
                        <ul>
                          <li class="float-right text-danger" v-for="error in errors">{{ error.password_confirmation }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <input type="submit" value="send" class="btn btn-primary w-50 my-4">
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  </section>
  <!-- content-End -->

</template>

<script>
  import axios from 'axios';
  import * as Validator from '@/plugins/validate';

  export default {
    data(){
      return{
        formData:{
          name:'',
          email:'',
          password:'',
          password_confirmation: ''
        },
        errors:[],
        baseUrl :  process.env.BASE_URL
      }
    },
    // computed:{
    //   isFormSubmitted(){
    //     return this.$store.getters.IsFormSubmitted;
    //   }
    // },
    methods:{
      async RegisterUser(){
        // form validation
        this.errors = [];

        //console.log(this.required(this.formData.email));
        console.log('2',Validator.required(this.formData.email));

        return;

        if (this.formData.email === '') {
          this.errors.push({email: 'فیلد ایمیل را تکمیل کنید!'});
        } else if (! this.validEmail(this.formData.email)){
          this.errors.push({email: 'ایمیل معتبر نیست!'});
        } else if((this.formData.email).length > 255){
          this.errors.push({email: 'ایمیل کاربر نمیتواند بیشتر از 255 کاراکتر داشته باشد!'});
        } else if (! await this.uniqueEmail(this.formData.email)) {
          this.errors.push({email: 'ایمیل تکراری است!'});
        }

        if (this.formData.password === '') {
          this.errors.push({password: 'فیلد رمز عبور را تکمیل کنید!'});
        } else if ((this.formData.password).length < 6 ){
          this.errors.push({password: 'رمز عبور باید حداقل 6 کاراکتر داشته باشد!'});
        }

        if (this.formData.password_confirmation !== this.formData.password) {
          this.errors.push({password_confirmation: 'رمز عبور و تکرار آن برابر نیستند!'});
        }

        if ((this.errors).length === 0){
          const register_data = {
            name: this.formData.name,
            email: this.formData.email,
            password: this.formData.password,
            password_confirmation: this.formData.password_confirmation
          };

          this.$store.dispatch("RegisterUser", register_data);
        }
      },
      validEmail:function(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      uniqueEmail:async function(email) {
        return axios.get(`${process.env.BASE_URL}auth/IsExistUserByEmail`, {
          params: { email: email }
        }).then(
          response => {
            console.log(response);
            return response.data.result;
          },
          error => {
            console.log(error);
          }
        );
      }
    },
  }
</script>

<style scoped>
  .input-group{
    direction: rtl;
  }
</style>

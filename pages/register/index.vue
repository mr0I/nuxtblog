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
                      <input type="email" class="form-control" placeholder="ایمیل*" v-model="formData.email">
                    </div>
                  </div>
                  <div class="d-flex flex-wrap justify-content-center">
                    <div class="input-group my-4 mr-sm-2 w-50">
                      <div class="input-group-prepend"><div class="input-group-text"><i class="material-icons">vpn_key</i></div></div>
                      <input type="password" class="form-control" placeholder="رمز عبور*" v-model="formData.password"
                             >
                    </div>
                  </div>
                  <div class="d-flex flex-wrap justify-content-center">
                    <div class="input-group my-4 mr-sm-2 w-50">
                      <div class="input-group-prepend"><div class="input-group-text"><i class="material-icons">vpn_key</i></div></div>
                      <input type="password" class="form-control" placeholder="تکرار رمز عبور*" v-model="formData.password_confirmation"
                             >
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
  export default {
    data(){
      return{
        formData:{
          name:'',
          email:'',
          password:'',
          password_confirmation: ''
        }
      }
    },
    // computed:{
    //   isFormSubmitted(){
    //     return this.$store.getters.IsFormSubmitted;
    //   }
    // },
    methods:{
      RegisterUser(){
        const register_data = {
          name: this.formData.name,
          email: this.formData.email,
          password: this.formData.password,
          password_confirmation: this.formData.password_confirmation
        };

        this.$store.dispatch("RegisterUser", register_data);
      }
    },
  }
</script>

<style scoped>
  .input-group{
    direction: rtl;
  }
</style>

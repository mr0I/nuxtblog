<template>
  <!-- Header-Start -->
  <header style="margin-bottom: 100px;">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <a class="navbar-brand mx-2">
        <img src="../../assets/images/logo.png" alt="" width="30" height="30">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/" active-class="active" exact>صفحه اصلی <span class="sr-only">(current)</span></nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/articles" active-class="active">مقالات <span class="sr-only">(current)</span></nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              دسته بندی مطالب
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="dropdown-item dropdown">آموزش وب
                <ul>
                  <li><a href="#">Html</a></li>
                  <li><a href="#">css</a></li>
                  <li><a href="#">jquery</a></li>
                </ul>
              </li>
              <div class="dropdown-divider"></div>
              <li class="dropdown-item dropdown">آموزش موبایل
                <ul>
                  <li><a href="#">Android</a></li>
                  <li><a href="#">IOS</a></li>
                  <li><a href="#">windows</a></li>
                </ul>
              </li>
              <div class="dropdown-divider"></div>
              <li class="dropdown-item" href="#">سایر</li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              extras
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
              <li class="dropdown-item">
                <nuxt-link class="nav-link" to="/users" active-class="active">users <span class="sr-only">(current)</span></nuxt-link>
              </li>
              <li class="dropdown-item dropdown">posts
                <ul>
                  <li>
                    <nuxt-link class="nav-link" to="/posts" active-class="active">posts <span class="sr-only">(current)</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="nav-link" to="/posts/admin" active-class="active">posts(Admin) <span class="sr-only">(current)</span></nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>


          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard" active-class="active">dash <span class="sr-only">(current)</span></nuxt-link>
          </li>
        </ul>

        <form action="search.html" class="form-inline" id="main_search">
          <input class="form-control mr-sm-2" type="search" name="s" placeholder="جستجو..." aria-label="Search">
          <button class="btn my-2 my-sm-0" type="submit">
            <i class="material-icons">search</i>
          </button>
        </form>

        <div class="dropdown mx-3">
          <i class="material-icons dropdown-toggle" data-toggle="dropdown" id="account">
            vpn_key
          </i>
          <!--<i class="material-icons text-white" data-toggle="dropdown" style="cursor: pointer" v-else>-->
            <!--person_pin-->
          <!--</i>-->
          <div class="dropdown-menu">
            <nuxt-link to="/register" class="dropdown-item"><i class="material-icons">person_add</i>ثبت نام</nuxt-link>
            <nuxt-link to="/login" class="dropdown-item"><i class="material-icons">person</i>ورود</nuxt-link>
          </div>
          <!--<div class="dropdown-menu" v-else>-->
            <!--<nuxt-link to="/dashboard" class="dropdown-item"><i class="material-icons">person_pin</i>پنل مديريت</nuxt-link>-->
            <!--<a href="#" class="dropdown-item" @click.prevent="SignOut()">-->
              <!--<i class="material-icons">exit_to_app</i>خروج-->
            <!--</a>-->
          <!--</div>-->
        </div>
      </div>
    </nav>
  </header>
  <!-- Header-End -->
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('CheckAuth');
    }
  }

  // export default {
  //   async created(){
  //     await this.$store.dispatch("CheckUserLogin");
  //     const userData = {"id": this.$store.getters.GetUserID};
  //     this.$store.dispatch("GetUserById" , userData);
  //   },
  //   computed: {
  //     IsUserAuthenticated() {
  //       return this.$store.getters.IsUserAuthenticated;
  //     },
  //     UserFullName() {
  //       return (this.$store.getters.GetUserFullName!==null)? this.$store.getters.GetUserFullName: '---';
  //     },
  //     UserAvatar() {
  //       const user_gender = (this.$store.getters.GetUserGender)? this.$store.getters.GetUserGender: 'male';
  //       return (this.$store.getters.GetUserAvatar === '') ?
  //         (user_gender === 'male') ?
  //           process.env.VUE_APP_DEFAULT_images_DIR +'avatar/male-avatar.png' :
  //           process.env.VUE_APP_DEFAULT_images_DIR +'avatar/female-avatar.png' : this.$store.getters.GetUserAvatar;
  //     },
  //     UserGender() {
  //       return this.$store.getters.GetUserGender;
  //     },
  //     isAvatarLoaded() {
  //       return this.$store.getters.IsAvatarLoaded;
  //     },
  //     currentRoutePath() {
  //       return this.$route.path;
  //     }
  //   },
  //   methods:{
  //     SignOut(){
  //       this.$store.dispatch("SignOutUser");
  //     }
  //   }
  // };
</script>

<style scoped>
  nav.navigation {
    top: 50px;
    background: #fff;
  }
  .navbar-expand-lg .navbar-collapse {
    direction: rtl;
  }
</style>

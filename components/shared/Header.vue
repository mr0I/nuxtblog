<template>
  <!-- Header-Start -->
  <header >
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

  <!--<header v-else>-->
    <!--<nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="z-index: 20 !important">-->
      <!--<input type="checkbox" id="check" class="checkbox" checked hidden>-->
      <!--<div class="menu_bar">-->
        <!--<label for="check" class="menu">-->
          <!--<div class="menu-line menu-line-1"></div>-->
          <!--<div class="menu-line menu-line-2"></div>-->
          <!--<div class="menu-line menu-line-3"></div>-->
        <!--</label>-->
      <!--</div>-->
      <!--<a class="navbar-brand mx-2">-->
        <!--<img src="../../assets/logo.png" alt="" width="30" height="30">-->
      <!--</a>-->
      <!--<div class="collapse navbar-collapse" id="">-->
        <!--<ul class="navbar-nav mr-auto">-->
          <!--<li class="nav-item">-->
            <!--<nuxt-link class="nav-link" to="/">-->
              <!--<i class="material-icons align-middle">open_in_new</i>-->
              <!--بازگشت به سایت-->
            <!--</nuxt-link>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
            <!--<a class="nav-link" href="#" @click.prevent="SignOut()">-->
              <!--<i class="material-icons align-middle">exit_to_app</i>-->
              <!--خروج-->
            <!--</a>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</nav>-->

    <!--<nav class="navigation" style="z-index: 10 !important">-->
      <!--<ul class="menu" id="side_menu">-->
        <!--<li class="menu-header">-->
          <!--<img src="../../assets/noise.gif" width="100" height="100" v-if="!isAvatarLoaded">-->
          <!--<img :src="UserAvatar" width="100" height="100" v-else-if="UserAvatar==''">-->
          <!--<img :src="UserAvatar" width="100" height="100" v-else>-->
          <!--<h5>نام کاربر: {{ UserFullName }}</h5>-->
        <!--</li>-->

        <!--<p class="mt-4">-->
          <!--<nuxt-link to="/dashboard" class="sec_title" >داشبورد</nuxt-link>-->
        <!--</p>-->
        <!--<p class="mt-4"><a href="#sec1" class="sec_title" data-toggle="collapse">مقالات</a></p>-->
        <!--<li class="collapse" id="sec1" data-parent="#side_menu">-->
          <!--<ul>-->
            <!--<li >-->
              <!--<nuxt-link to="/dashboard/articles" class="side_menu_item">-->
                <!--<span><i class="material-icons">list</i>لیست مقالات </span>-->
              <!--</nuxt-link>-->
            <!--</li>-->
            <!--<li>-->
              <!--<nuxt-link to="/dashboard/add_article" class="side_menu_item">-->
                <!--<span><i class="material-icons">add</i>افزودن مقاله</span>-->
              <!--</nuxt-link>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</li>-->
        <!--<p class="mt-4"><a href="#sec2" class="sec_title" data-toggle="collapse">دسته بندی ها</a></p>-->
        <!--<li class="collapse" id="sec2" data-parent="#side_menu">-->
          <!--<ul>-->
            <!--<li >-->
              <!--<nuxt-link to="/dashboard/categories" class="side_menu_item">-->
                <!--<span><i class="material-icons">list</i>لیست دسته بندی ها </span>-->
              <!--</nuxt-link>-->
            <!--</li>-->
            <!--<li >-->
              <!--<nuxt-link to="/dashboard/add_category" class="side_menu_item">-->
                <!--<span><i class="material-icons">add</i>افزودن دسته بندی</span>-->
              <!--</nuxt-link>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</li>-->
        <!--<p class="mt-4">-->
          <!--<nuxt-link to="/dashboard/profile" class="sec_title" >ویرایش پروفایل</nuxt-link>-->
        <!--</p>-->
      <!--</ul>-->
    <!--</nav>-->
  <!--</header>-->
  <!-- Header-End -->
</template>

<script>
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
</style>

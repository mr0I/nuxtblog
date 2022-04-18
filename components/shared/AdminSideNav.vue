<template>
  <nav class="navigation" style="z-index: 10 !important">
    <ul class="menu" id="side_menu">
      <li class="menu-header">
        <img src="../../assets/images/noise.gif" width="100" height="100">
        <!--<img :src="UserAvatar" width="100" height="100" v-else-if="UserAvatar==''">-->
        <!--<img :src="UserAvatar" width="100" height="100" v-else>-->
        <h5>نام کاربر: </h5>
      </li>

      <p class="mt-4">
        <nuxt-link to="/dashboard" class="sec_title" >داشبورد</nuxt-link>
      </p>
      <p class="mt-4"><a href="#sec1" class="sec_title" data-toggle="collapse">مقالات</a></p>
      <li class="collapse" id="sec1" data-parent="#side_menu">
        <ul>
          <li >
            <nuxt-link to="/dashboard/articles" class="side_menu_item">
              <span><i class="material-icons">list</i>لیست مقالات </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/dashboard/add_article" class="side_menu_item">
              <span><i class="material-icons">add</i>افزودن مقاله</span>
            </nuxt-link>
          </li>
        </ul>
      </li>
      <p class="mt-4"><a href="#sec2" class="sec_title" data-toggle="collapse">دسته بندی ها</a></p>
      <li class="collapse" id="sec2" data-parent="#side_menu">
        <ul>
          <li >
            <nuxt-link to="/dashboard/categories" class="side_menu_item">
              <span><i class="material-icons">list</i>لیست دسته بندی ها </span>
            </nuxt-link>
          </li>
          <li >
            <nuxt-link to="/dashboard/add_category" class="side_menu_item">
              <span><i class="material-icons">add</i>افزودن دسته بندی</span>
            </nuxt-link>
          </li>
        </ul>
      </li>
      <p class="mt-4">
        <nuxt-link to="/dashboard/profile" class="sec_title" >ویرایش پروفایل</nuxt-link>
      </p>
    </ul>
  </nav>
</template>


<style scoped>
  nav.navigation {
    top: 50px;
    background: #fff;
  }
</style>

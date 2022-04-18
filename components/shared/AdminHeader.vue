<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="z-index: 20 !important">
      <input type="checkbox" id="check" class="checkbox" checked hidden>
      <div class="menu_bar">
        <label for="check" class="menu">
          <div class="menu-line menu-line-1"></div>
          <div class="menu-line menu-line-2"></div>
          <div class="menu-line menu-line-3"></div>
        </label>
      </div>
      <a class="navbar-brand mx-2">
        <img src="../../assets/images/logo.png" alt="" width="30" height="30">
      </a>
      <div class="collapse navbar-collapse" id="">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">
              <i class="material-icons align-middle">open_in_new</i>
              بازگشت به سایت
            </nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="SignOut()">
              <i class="material-icons align-middle">exit_to_app</i>
              خروج
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


<script>
  export default {
    methods:{
      SignOut(){
        this.$store.dispatch("SignOutUser");
      }
    }
  }
</script>

<style scoped>
  .navbar-expand-lg {
    direction: rtl;
  }
</style>

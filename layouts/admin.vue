<template>
  <div>
    <admin-header />
    <admin-side-nav />
    <h1 class="mt-5 text-center">پنل مدیریت</h1>
    <nuxt/>
  </div>
</template>

<script>
  import AdminHeader from '@/components/shared/AdminHeader';
  import AdminSideNav from '@/components/shared/AdminSideNav';

  export default {
    components: {
      AdminHeader,AdminSideNav
    }
  }
</script>


<template>
  <div>
    <p class="text-center p-3">لیست مقالات</p>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: ["check-auth","auth"],
  }
</script>

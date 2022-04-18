<template>
  <div>
    admin dash
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: ["check-auth","auth"],
  }
</script>

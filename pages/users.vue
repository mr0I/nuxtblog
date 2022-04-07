<template>
  <div>
    <p>Please enter an id and click the button.</p>
    <input type="text" v-model="userId">
    <button @click="onLoadUser">Load User</button>
    <nuxt-child />
  </div>
</template>


<script>
  export default {
    data() {
      return {
        userId: ''
      }
    },
    methods: {
      onLoadUser() {
        this.$router.push('/users/' + this.userId)
      }
    },
    layout: 'users'
  }
</script>



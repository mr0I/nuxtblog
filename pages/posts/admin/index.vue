<template>
  <div class="posts-page">
    <PostList isAdmin />
  </div>
</template>

<script>
  import PostList from '@/components/Posts/PostList'

  export default {
    name : 'AdminPage',
    components: {
      PostList
    }
  }
</script>


<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<template>
  <div class="posts-page">
    <PostList />

    <div class="row">
      <nuxt-link to="/" class="post-preview"
                 v-for="(post,index) in postsList" :key="post.id">
        <article>
          <div
            class="post-thumbnail"
            :style="{backgroundImage: 'url(' + post.thumbnail + ')'}"></div>
          <div class="post-content">
            <span>{{ index++ }}</span>
            <h1>{{ post.title }}</h1>
            <p>{{ post.previewText }}</p>
            <span>{{ post.date | date }}</span>
          </div>
        </article>
      </nuxt-link>

    </div>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  computed:{
    postsList(){
      return this.$store.getters.loadedPosts;
    }
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

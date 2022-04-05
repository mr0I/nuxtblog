<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/shared/Header'
  import Footer from '@/components/shared/Footer'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

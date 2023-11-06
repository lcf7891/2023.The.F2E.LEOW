<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/FooterCom.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<template>
  <NavBar />

  <router-view />

  <Footer />
</template>

<style lang="scss">
</style>

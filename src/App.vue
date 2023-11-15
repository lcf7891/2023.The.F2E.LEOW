<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/FooterCom.vue';
import MNav from '@/components/MobileNav.vue';

export default {
  components: {
    NavBar,
    Footer,
    MNav,
  },
};
</script>

<template>
  <NavBar />

  <router-view />

  <Footer />
  <MNav class="d-lg-none position-sticky bottom-0 bg-white" />
</template>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>

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
  <NavBar class="position-sticky top-0 atomization" />

  <router-view />

  <Footer />
  <MNav class="d-lg-none position-sticky bottom-0 atomization" />
</template>

<style lang="scss">
  .atomization {
    backdrop-filter: blur(10px);
  }
</style>

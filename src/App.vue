<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/FooterCom.vue';
import MNav from '@/components/MobileNav.vue';
import Loading from '@/components/StartLoading.vue';

export default {
  components: {
    NavBar,
    Footer,
    MNav,
    Loading,
  },
  data() {
    return {
      isView: false,
    };
  },
  created() {
    setTimeout(() => {
      this.isView = true;
    }, 3000);
  },
};
</script>

<template>
  <template v-if="isView">
    <NavBar />

    <router-view />

    <Footer />
    <MNav class="d-lg-none position-sticky bottom-0 bg-white" />
  </template>

  <Loading v-else />
</template>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>

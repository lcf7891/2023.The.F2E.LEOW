<script>
import Loading from './components/LoadingView.vue'

export default {
  components: {
    Loading
  },
  data() {
    return {
      rendering: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.rendering = true
    }, 1500)
  },  
}
</script>

<template>
  <RouterView v-if="rendering" />
  <Loading v-else />
</template>

<style lang="scss">
  @import '@scss/style.scss';
</style>
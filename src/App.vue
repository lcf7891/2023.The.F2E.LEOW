<script>
import Loading from './components/LoadingView.vue'

export default {
  components: {
    Loading
  },
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 1500)
  },  
}
</script>

<template>
  <RouterView v-if="show" />
  <Loading v-else />
</template>

<style lang="scss">
  @import '@scss/style.scss';
</style>
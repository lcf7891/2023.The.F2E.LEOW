<script>
import { Vue3Lottie } from 'vue3-lottie'
import LoadingJSON from '@/assets/jsons/loading.json'

export default {
  components: {
    Vue3Lottie
  },
  data() {
    return {
      LoadingJSON
    }
  }
}
</script>

<template>
  <section class="d-flex justify-content-center align-items-center vh-100">
    <Vue3Lottie :animationData="LoadingJSON" :height="500" :width="500" />
  </section>
</template>

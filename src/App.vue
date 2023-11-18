<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Loading from './components/LoadingView.vue'

const show = ref(false)

setTimeout(() => {
  show.value = true
}, 1000)
</script>

<template>
  <RouterView v-if="show" />
  <Loading v-else />
</template>

<style lang="scss">
  @import '@scss/style.scss';
</style>
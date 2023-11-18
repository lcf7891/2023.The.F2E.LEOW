<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import LoadinJSON from '@/assets/jsons/loading.json'

</script>

<template>
  <section class="d-flex justify-content-center align-items-center vh-100">
    <Vue3Lottie :animationData="LoadinJSON" :height="500" :width="500" />
  </section>
</template>

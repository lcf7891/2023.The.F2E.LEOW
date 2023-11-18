import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Lottie from 'vue3-lottie'
// import AOS from "aos";
import App from './App.vue'
import router from './router'

// import 'aos/dist/aos.css';

const app = createApp(App)
app.use(createPinia())
app.use(Vue3Lottie)
// app.use(AOS)
app.use(router)
app.mount('#app')

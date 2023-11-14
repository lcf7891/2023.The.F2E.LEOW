import { createApp } from 'vue';
import { createPinia } from 'pinia';
import * as bootstrap from 'bootstrap';
import { register } from 'swiper/element/bundle';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
const app = createApp(App);
app.use(bootstrap);
app.use(register());
app.use(pinia);
app.use(router);
app.mount('#app');

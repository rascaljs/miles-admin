import { createApp } from 'vue';
import App from './App.vue';
import 'uno.css';
import '@/styles/scss/prime-vue/index.scss';
import { setupAssets, setupPrimeVue } from '@/plugins';
function setupApp() {
  const app = createApp(App);
  // import assets: js、css
  setupAssets();
  // import primeVue
  setupPrimeVue(app);
  // mount app
  app.mount('#app');
}

setupApp();

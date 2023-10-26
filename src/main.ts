import '@/assets/styles.scss';
import { createApp } from 'vue';
import '@/styles/css/global.css';
import App from './App.vue';
import { setupAssets } from '@/plugins';
function setupApp() {
  // import assets: js、css
  setupAssets();
  const app = createApp(App);
  // mount app
  app.mount('#app');
}

setupApp();

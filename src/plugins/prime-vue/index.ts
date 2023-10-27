import type { App } from 'vue';
import setupPlugin from './plugin';
import setupComponents from './components';
export default function setupPrimeVue(app: App) {
  setupPlugin(app);
  setupComponents(app);
}

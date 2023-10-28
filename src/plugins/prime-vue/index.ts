import type { App } from 'vue';
import setupPlugin from './plugin';
import setupComponents from './components';
import setupDirective from './directive';
export default function setupPrimeVue(app: App) {
  setupPlugin(app);
  setupComponents(app);
  setupDirective(app);
}

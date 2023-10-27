import Tooltip from 'primevue/tooltip';
import BadgeDirective from 'primevue/badgedirective';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import type { App } from 'vue';
export default function setupDirective(app: App) {
  app.directive('tooltip', Tooltip);
  app.directive('badge', BadgeDirective);
  app.directive('ripple', Ripple);
  app.directive('styleclass', StyleClass);
}

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import DialogService from 'primevue/dialogservice';
import ConfirmationService from 'primevue/confirmationservice';
import type { App } from 'vue';
export default function setupPlugin(app: App) {
  app.use(PrimeVue, {
    ripple: true,
    pt: {
      panel: {
        header: () => ({
          class: [
            'flex items-center justify-between', // flex and alignments
            'px-5 pt-5 bg-purple-500 text-white rounded-tl-lg rounded-tr-lg' // borders and color
          ]
        }),
        title: 'leading-none font-bold',
        content: {
          class: [
            'px-5 pb-3 pt-2 bg-purple-500  text-white last:rounded-br-lg last:rounded-bl-lg',
            'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
          ]
        }
      }
    }
  });
  app.use(ToastService);
  app.use(DialogService);
  app.use(ConfirmationService);
}

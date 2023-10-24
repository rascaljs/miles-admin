import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default function unplugin() {
  return [
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
        }
      ],
      dts: 'src/typings/auto-imports.d.ts'
    }),
    Components({
      dts: 'src/typings/components.d.ts',
      resolvers: [NaiveUiResolver()]
    })
  ];
}

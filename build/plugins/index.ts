import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import unplugin from './unplugin';
import unocss from '@unocss/vite';
/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(): (PluginOption | PluginOption[])[] {
  const plugins = [
    vue({
      script: {
        defineModel: true
      }
    }),
    ...unplugin(),
    unocss()
  ];

  return plugins;
}

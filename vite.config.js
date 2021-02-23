import vuePlugin from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import Pages from 'vite-plugin-pages';

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [vuePlugin(), Pages(), ...WindiCSS({
    safelist: 'prose prose-sm m-auto'
  })],
  build: {
    minify: false
  }
}
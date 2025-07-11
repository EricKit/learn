import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: '/index.html',
        css: 'src/css-basics.html',
        dev: 'src/developer-env.html',
        file: 'src/file-structure.html',
        html: 'src/html-basics.html',
        js: 'src/javascript-basics.html',
        solidIndex: 'src/solid-index.html',
        solidTsx: 'src/solid-index.tsx',
      },
    },
  },
});

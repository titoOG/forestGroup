import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import path from 'path';
import { resolve } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// import mpa from 'vite-plugin-multi-pages';

export default defineConfig({
  server: {
    port: '2705',
    host: '0.0.0.0',
  },

  preview: {
    port: '1337',
  },

  plugins: [
    Inspect({
      build: true,
      outputDir: '.vite-inspect',
    }),

    // mpa({
    //   scanDir: './',
    //   defaultOpenPage: 'offers.html',
    //   ignorePageNames: '',
    // }),

    ViteImageOptimizer({
      includePublic: false,
      jpg: {
        quality: 70,
      },
    }),
  ],
  build: {
    sourcemap: true,
    copyPublicDir: false,
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, './pages/contact.html'),
        offers: resolve(__dirname, './pages/offers.html'),
      },

      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/img/[name]-[hash][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/\.woff$/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          if (/\.woff2$/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/assets'),
      'stylePath': path.resolve(__dirname, './src/assets/scss'),
    },
  },
});

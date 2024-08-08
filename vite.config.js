import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import express from 'express';
import path from 'path';
import { resolve } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  appType: 'custom',

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

    ViteImageOptimizer({
      includePublic: false,
      jpg: {
        quality: 80,
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
        contact: resolve(__dirname, './contact.html'),
        offers: resolve(__dirname, './offers.html'),
        error: resolve(__dirname, './404.html'),
      },

      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|svg)$/.test(name ?? '')) {
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
});

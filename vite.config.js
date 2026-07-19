import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 3000,
    open: true
  }
});

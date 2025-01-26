import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'frontend/index.html', // Replace with your entry file (e.g., index.js)
      },
    },
  },
});

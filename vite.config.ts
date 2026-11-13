import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'phone-hub-express-api',
      async configureServer(server) {
        const { createApiApp } = await import('./src/server/app');
        const apiApp = createApiApp();
        server.middlewares.use(apiApp);
      },
    },
  ],
  server: {
    port: 5173,
  },
});

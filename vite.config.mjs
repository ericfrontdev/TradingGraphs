// https://github.com/vitejs/vite/discussions/3448
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

// ----------------------------------------------------------------------

export default defineConfig({
  base: '/trading/graphs/',
  plugins: [react(), jsconfigPaths()],
});

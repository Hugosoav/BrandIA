import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const isUserSite = repo?.toLowerCase().endsWith('.github.io');
  const base = repo ? (isUserSite ? '/' : `/${repo}/`) : '/';

  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    // Ensure correct asset paths when hosted under /<repo>/ on GitHub Pages
    base,
  };
});

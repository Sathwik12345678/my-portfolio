import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        projects: resolve(root, 'projects.html'),
        resume: resolve(root, 'resume.html'),
        contact: resolve(root, 'contact.html'),
        project: resolve(root, 'project.html')
      }
    }
  }
});
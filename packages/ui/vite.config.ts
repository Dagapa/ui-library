import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      entryRoot: resolve(__dirname, 'src'),
      compilerOptions: { rootDir: resolve(__dirname, 'src') },
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UILibraryReact',
      fileName: 'ui-library-react',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // use-sync-external-store is CJS-only (no ESM build); Rolldown can't
      // statically convert its internal `require('react')`, so it must stay
      // external and be resolved at runtime instead of inlined.
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'use-sync-external-store',
        'use-sync-external-store/shim',
        'use-sync-external-store/shim/with-selector',
      ],
    },
  },
});

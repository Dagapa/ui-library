import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import preserveDirectives from 'rollup-plugin-preserve-directives';
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
      cssFileName: 'ui-library-react',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // use-sync-external-store is CJS-only (no ESM build); Rolldown can't
      // statically convert its internal `require('react')`, so it must stay
      // external and be resolved at runtime instead of inlined.
      // @base-ui/react is a real "dependencies" entry (not bundled) so that
      // preserveModules doesn't mirror its entire internal file tree into dist.
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'use-sync-external-store',
        'use-sync-external-store/shim',
        'use-sync-external-store/shim/with-selector',
        /^@base-ui\/react/,
      ],
      // Keep one output file per source module (instead of one big bundle)
      // so "use client" directives stay scoped to the components that need
      // them; Rollup would otherwise drop directives that aren't at the top
      // of the entry chunk, hence the preserveDirectives plugin.
      plugins: [preserveDirectives()],
      output: [
        {
          format: 'es',
          dir: 'dist',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
        {
          format: 'cjs',
          dir: 'dist',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].cjs',
        },
      ],
    },
  },
});

import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import createExternal from 'vite-plugin-external';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: (format) => `chista-state-manager-lib.${format}.js`,
      name: "ChistaStateManagerLib",
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    createExternal({
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    })
  ],
  define: {
    'process.env': {}
  }
});

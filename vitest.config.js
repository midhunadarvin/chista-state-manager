import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [],
  test: {
    include: ["src/*.test.ts", "src/**/*.test.ts", "src/**/*.spec.ts"],
    globals: true
  },
})
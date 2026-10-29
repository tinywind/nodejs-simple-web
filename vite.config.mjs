import {defineConfig} from 'vitest/config';

export default defineConfig({
    base: '/tinywind/nodejs-simple-web/',
    cacheDir: '.tmp/vite-cache',
    oxc: {jsx: {runtime: 'automatic'}},
    build: {outDir: 'build'},
    test: {
        environment: 'jsdom',
        include: ['src/**/*.test.jsx'],
    },
});

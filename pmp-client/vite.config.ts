/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        // RMWC does not properly support vite, so we mock the environment variable
        'process.env': {}
    },
    test: {
        // Default include, narrowed down to src directory
        include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)']
    }
});

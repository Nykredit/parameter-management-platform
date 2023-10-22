/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    /** Enable the following lines to keep default styles on elements */
    // corePlugins: {
    //     preflight: false
    // },
    theme: {
        extend: {}
    },
    plugins: [require('@tailwindcss/typography')]
};

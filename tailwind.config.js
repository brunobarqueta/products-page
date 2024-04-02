/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'newsletter-hero': "url('/src/assets/bg.png')",
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'insconsolata': ['Inconsolata', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
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
            }
        },
    },
    plugins: [],
}
const nativewind = require("nativewind/tailwind/native");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.ts", "App.js", "./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [nativewind()],
}


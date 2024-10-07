/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/*.{html,js}",
        "./src/**/*.{html,js}",
        "./src/*.{html,ts}",
        "./src/**/*.{html,ts}",
        "./src/**/*.vue",
        "./public/*.html",
        "./node_modules/tw-elements/js/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {},
            colors: {
                color1: "#E2F1E7",
                color2: "#629584",
                color3: "#387478",
                color4: "#243642",
            },
        },
    },
    plugins: [require("tw-elements/plugin.cjs")],
};

/** @type {import('tailwindcss').Config} */
import('tailwindcss').Config
module.exports = {
    content: [
        // "./src/**/*.{html,js,vue}",
        "./src/components/**/*.{html,js,vue}",
        "./src/App.vue",
        "./index.html"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3280BC",
                danger: "#dc3545",
                success: "#28a745",
                warning: "#ffc107",
                green: "#33c489",
                "pale-gray": "#e5e7eb",
                "dodger-blue": "#409EFF",
                "dark-orange": "#ffc107",
                "dark-brown": "rgba(53, 58, 64, 0.7)",
            },
            fontFamily: {
                display: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"],
            },
            screens: {
                "min-xs": { min: "481px" },
                "min-sm": { min: "601px" },
                "min-md": { min: "821px" },
                "min-lg": { min: "1026px" },
                "min-xl": { min: "1201px" },
                "min-2xl": { min: "1451px" },
                "max-xs": { max: "480px" },
                "max-sm": { max: "600px" },
                "max-md": { max: "820px" },
                "max-lg": { max: "1025px" },
                "max-xl": { max: "1200px" },
                "max-2xl": { max: "1450px" },
            },
            maxWidth: {
                "8xl": "1450px",
            },
            boxShadow: {
                default: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
                card: "0px 1px 3px rgba(0, 0, 0, 0.12)",
                "card-2": "0px 1px 2px rgba(0, 0, 0, 0.05)",
            },
            keyframes: {
                "from-top": {
                    "0%": { top: "40px", opacity: "0" },
                    "50%": { opacity: "0.5" },
                    "100%": { top: "70px", opacity: "1" },
                },
                "to-top": {
                    "0%": { top: "70px", opacity: "1" },
                    "50%": { opacity: "0.5" },
                    "100%": { top: "40px", opacity: "0" },
                },
            },
            animation: {
                "from-top": "from-top 0.3s normal",
                "to-top": "to-top 0.2s ease-in-out",
            },
            fontSize: {
                "base-client": "12px",
            },
        },
    },
    plugins: [],
}
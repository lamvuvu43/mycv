import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/mycv/",
  plugins: [vue()],
  css: {
    postcss: "./postcss.config.js", // Đảm bảo sử dụng cấu hình PostCSS
  },
});

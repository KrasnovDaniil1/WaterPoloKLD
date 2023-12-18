import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        //cssCodeSplit: false, --- если нужно
        //jsCodeSplit: false,  --- если нужно
        rollupOptions: {
            output: {
                dir: "./dist/site_files", //---- определяем КУДА нужно
                assetFileNames: "site.css",
                entryFileNames: "site.js",
            },
        },
        emptyDir: true,
    },

    // resolve: {
    //     alias: {
    //         "@": fileURLToPath(new URL("./src", import.meta.url)),
    //     },
    // },
});

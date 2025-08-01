import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
   build: {
    rollupOption: {
        input: {
            main: resolve(__dirname,"index.html"),
        },
    },
   },

});

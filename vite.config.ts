import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import WindiCSS from "vite-plugin-windicss"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"
import Pages from "vite-plugin-pages"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers: [IconsResolver()],
    }),
    Icons(),
    Pages(),
  ],
})

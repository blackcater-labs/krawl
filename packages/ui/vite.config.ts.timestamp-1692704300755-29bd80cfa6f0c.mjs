// vite.config.ts
import { resolve } from "node:path";
import { defineConfig } from "file:///Users/blackcater/Workspace/Codes/proj/krawl/node_modules/.pnpm/registry.npmmirror.com+vite@4.4.9_@types+node@20.5.2/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/blackcater/Workspace/Codes/proj/krawl/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.3.3_vite@4.4.9_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///Users/blackcater/Workspace/Codes/proj/krawl/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.25.1_rollup@3.28.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///Users/blackcater/Workspace/Codes/proj/krawl/node_modules/.pnpm/registry.npmmirror.com+unplugin-auto-import@0.16.6_@vueuse+core@10.3.0_rollup@3.28.1/node_modules/unplugin-auto-import/dist/vite.js";
import Unocss from "file:///Users/blackcater/Workspace/Codes/proj/krawl/node_modules/.pnpm/registry.npmmirror.com+unocss@0.55.2_postcss@8.4.28_rollup@3.28.1_vite@4.4.9/node_modules/unocss/dist/vite.mjs";
import Pages from "file:///Users/blackcater/Workspace/Codes/proj/krawl/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-pages@0.31.0_vite@4.4.9/node_modules/vite-plugin-pages/dist/index.mjs";
import { presetAttributify, presetIcons, presetUno } from "file:///Users/blackcater/Workspace/Codes/proj/krawl/node_modules/.pnpm/registry.npmmirror.com+unocss@0.55.2_postcss@8.4.28_rollup@3.28.1_vite@4.4.9/node_modules/unocss/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/blackcater/Workspace/Codes/proj/krawl/packages/ui";
var vite_config_default = defineConfig({
  root: __vite_injected_original_dirname,
  base: "./",
  resolve: {
    alias: {
      "~/": `${resolve(__vite_injected_original_dirname, "client")}`
    }
  },
  define: {
    __BASE_PATH__: '"/__krawl__/"'
  },
  plugins: [
    Vue({
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ],
      shortcuts: {
        "bg-base": "bg-white dark:bg-[#111]",
        "bg-overlay": "bg-[#eee]:50 dark:bg-[#222]:50",
        "bg-header": "bg-gray-500:5",
        "bg-active": "bg-gray-500:8",
        "bg-hover": "bg-gray-500:20",
        "border-base": "border-gray-500:10",
        "tab-button": "font-light op50 hover:op80 h-full px-4",
        "tab-button-active": "op100 bg-gray-500:10"
      }
    }),
    Components({
      dirs: ["client/components"],
      dts: resolve(__vite_injected_original_dirname, "./client/components.d.ts")
    }),
    Pages({
      dirs: ["client/pages"]
    }),
    AutoImport({
      dts: resolve(__vite_injected_original_dirname, "./client/auto-imports.d.ts"),
      dirs: [
        "./client/composables"
      ],
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core"
      ],
      injectAtEnd: true
    })
  ],
  build: {
    outDir: "./dist/client"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYmxhY2tjYXRlci9Xb3Jrc3BhY2UvQ29kZXMvcHJvai9rcmF3bC9wYWNrYWdlcy91aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2JsYWNrY2F0ZXIvV29ya3NwYWNlL0NvZGVzL3Byb2ova3Jhd2wvcGFja2FnZXMvdWkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2JsYWNrY2F0ZXIvV29ya3NwYWNlL0NvZGVzL3Byb2ova3Jhd2wvcGFja2FnZXMvdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xuaW1wb3J0IHsgcHJlc2V0QXR0cmlidXRpZnksIHByZXNldEljb25zLCBwcmVzZXRVbm8gfSBmcm9tICd1bm9jc3MnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290OiBfX2Rpcm5hbWUsXG4gIGJhc2U6ICcuLycsXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ34vJzogYCR7cmVzb2x2ZShfX2Rpcm5hbWUsICdjbGllbnQnKX1gLFxuICAgIH0sXG4gIH0sXG4gIGRlZmluZToge1xuICAgIF9fQkFTRV9QQVRIX186ICdcIi9fX2tyYXdsX18vXCInLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgVnVlKHtcbiAgICAgIHNjcmlwdDoge1xuICAgICAgICBkZWZpbmVNb2RlbDogdHJ1ZSxcbiAgICAgICAgcHJvcHNEZXN0cnVjdHVyZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgVW5vY3NzKHtcbiAgICAgIHByZXNldHM6IFtcbiAgICAgICAgcHJlc2V0VW5vKCksXG4gICAgICAgIHByZXNldEF0dHJpYnV0aWZ5KCksXG4gICAgICAgIHByZXNldEljb25zKCksXG4gICAgICBdLFxuICAgICAgc2hvcnRjdXRzOiB7XG4gICAgICAgICdiZy1iYXNlJzogJ2JnLXdoaXRlIGRhcms6YmctWyMxMTFdJyxcbiAgICAgICAgJ2JnLW92ZXJsYXknOiAnYmctWyNlZWVdOjUwIGRhcms6YmctWyMyMjJdOjUwJyxcbiAgICAgICAgJ2JnLWhlYWRlcic6ICdiZy1ncmF5LTUwMDo1JyxcbiAgICAgICAgJ2JnLWFjdGl2ZSc6ICdiZy1ncmF5LTUwMDo4JyxcbiAgICAgICAgJ2JnLWhvdmVyJzogJ2JnLWdyYXktNTAwOjIwJyxcbiAgICAgICAgJ2JvcmRlci1iYXNlJzogJ2JvcmRlci1ncmF5LTUwMDoxMCcsXG5cbiAgICAgICAgJ3RhYi1idXR0b24nOiAnZm9udC1saWdodCBvcDUwIGhvdmVyOm9wODAgaC1mdWxsIHB4LTQnLFxuICAgICAgICAndGFiLWJ1dHRvbi1hY3RpdmUnOiAnb3AxMDAgYmctZ3JheS01MDA6MTAnLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGRpcnM6IFsnY2xpZW50L2NvbXBvbmVudHMnXSxcbiAgICAgIGR0czogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL2NsaWVudC9jb21wb25lbnRzLmQudHMnKSxcbiAgICB9KSxcbiAgICBQYWdlcyh7XG4gICAgICBkaXJzOiBbJ2NsaWVudC9wYWdlcyddLFxuICAgIH0pLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgZHRzOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vY2xpZW50L2F1dG8taW1wb3J0cy5kLnRzJyksXG4gICAgICBkaXJzOiBbXG4gICAgICAgICcuL2NsaWVudC9jb21wb3NhYmxlcycsXG4gICAgICBdLFxuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgIF0sXG4gICAgICBpbmplY3RBdEVuZDogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICcuL2Rpc3QvY2xpZW50JyxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBWLFNBQVMsZUFBZTtBQUNsWCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sV0FBVztBQUNsQixTQUFTLG1CQUFtQixhQUFhLGlCQUFpQjtBQVAxRCxJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxNQUFNLEdBQUcsUUFBUSxrQ0FBVyxRQUFRLENBQUM7QUFBQSxJQUN2QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLGVBQWU7QUFBQSxFQUNqQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsTUFDcEI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLGtCQUFrQjtBQUFBLFFBQ2xCLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFDWCxjQUFjO0FBQUEsUUFDZCxhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixZQUFZO0FBQUEsUUFDWixlQUFlO0FBQUEsUUFFZixjQUFjO0FBQUEsUUFDZCxxQkFBcUI7QUFBQSxNQUN2QjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsTUFBTSxDQUFDLG1CQUFtQjtBQUFBLE1BQzFCLEtBQUssUUFBUSxrQ0FBVywwQkFBMEI7QUFBQSxJQUNwRCxDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixNQUFNLENBQUMsY0FBYztBQUFBLElBQ3ZCLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULEtBQUssUUFBUSxrQ0FBVyw0QkFBNEI7QUFBQSxNQUNwRCxNQUFNO0FBQUEsUUFDSjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

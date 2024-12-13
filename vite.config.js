import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { ViteAliases } from 'vite-aliases';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import svgLoader from 'vite-svg-loader';

const iconResolver = IconsResolver({
    componentPrefix: 'icon',
});

// https://vite.dev/config/
export default defineConfig({
    build: {
        target: 'esnext',
    },
    server: {
        host: true,
        port: 8080,
        strictPort: true,
        cors: false,
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern' // or "modern"
            }
        }
    },
    plugins: [
        AutoImport({
            dts: true,
            eslintrc: {
                enabled: true
            },
            include: [
                /\.[tj]sx?$/,
                /\.vue$/, /\.vue\?vue/,
                /\.md$/
            ],
            imports: [
                'vue',
                'vue-router',
                'pinia',
                '@vueuse/math',
                '@vueuse/core',
                '@vueuse/head',
                'vue/macros',
            ],
            resolvers: [
                iconResolver
            ]
        }),
        Components({
            dirs: [
                'src/components',
            ],
            dts: true,
            // directoryAsNamespace: true,
            globalNamespaces: ['global'],
            resolvers: [
                iconResolver
            ]
        }),
        ViteAliases({
            prefix: '~'
        }),
        Icons({
            scale: 1,
            compiler: 'vue3',
        }),
        Vue({
            script: {
                propsDestructure: true,
            },
        }),
        svgLoader(),
    ],
})

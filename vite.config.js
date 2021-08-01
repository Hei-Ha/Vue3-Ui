import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { md } from './plugins/md'

export default defineConfig({
    plugins: [vue()]
})
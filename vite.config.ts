import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { baseParse } from '@vue/compiler-core'
import fs from 'fs'


const transform = {
    name: 'vue-transform-demo',
    transform(code, path) {
        if (!/vue&type=demo/.test(path)) {
            return;
        }
        const file = fs.readFileSync(path.split('?')[0]).toString()
        const parsed = baseParse(file).children.find(n => n.tag === 'demo')
        const title = parsed.children[0].content
        const main = file.split(parsed.loc.source).join('').trim()
        return `export default function (Component) {
                Component.__sourceCode = ${
            JSON.stringify(main)
        }
                Component.__sourceCodeTitle = ${JSON.stringify(title)}
              }`.trim()
    
    },
}
export default defineConfig({
    server: {
        port: 3000,
    },
    // 配置选项
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/],
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => {
                        return tag.startsWith('demo') // (return true)
                    }
                }
            }
        }),
        Markdown(),
        transform,
    ],
})
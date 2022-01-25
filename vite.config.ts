import vue from '@vitejs/plugin-vue'
import path from "path"
// import fs from 'fs'
// import { baseParse } from '@vue/compiler-core'

export default {
    plugins: [vue()],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js',
            '@': path.resolve(process.cwd(), 'src')
        }
    },
    vueCustomBlockTransforms: {
        Hello: () => {
            return `export default function (Component) {
                Component.__sourceCode = 123
              }`
        }
        // demo: (options) => {
        //     const { code, path } = options
        //     const file = fs.readFileSync(path).toString()
        //     const parsed = baseParse(file).children.find(n => n.tag === 'demo')
        //     const title = parsed.children[0].content
        //     const main = file.split(parsed.loc.source).join('').trim()
        //     return `export default function (Component) {
        //         Component.__sourceCode = ${
        //                 JSON.stringify(main)
        //             }
        //         Component.__sourceCodeTitle = ${JSON.stringify(title)}
        //       }`.trim()
        // }
    }
}
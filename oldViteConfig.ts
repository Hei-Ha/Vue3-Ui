// import vue from '@vitejs/plugin-vue'
// import path from "path"
// import fs from 'fs'
// import { baseParse } from '@vue/compiler-core'
// import { marked } from 'marked'
//
// const mdToJs = str => {
//     const content = JSON.stringify(marked(str))
//     return `export default ${content}`
// }
// function md() {
//     return {
//         // 用于开发
//         configureServer: [
//             async ({ app }) => {
//                 app.use(async (ctx, next) => { // koa
//                     if (ctx.path.endsWith('.md')) {
//                         ctx.type = 'js'
//                         const filePath = path.join(process.cwd(), ctx.path)
//                         ctx.body = mdToJs(fs.readFileSync(filePath).toString())
//                     } else {
//                         await next()
//                     }
//                 })
//             },
//         ],
//         transforms: [{  // 用于 rollup // 插件
//             test: context => context.path.endsWith('.md'),
//             transform: ({ code }) => mdToJs(code)
//         }]
//     }
// }
//
// export default {
//     assetsDir: 'assets',
//     base: './',
//     plugins: [vue(), md()],
//     resolve: {
//         alias: {
//             // 'vue': 'vue/dist/vue.esm-bundler.js',
//             '@': path.resolve(process.cwd(), 'src')
//         }
//     },
//     vueCustomBlockTransforms: {
//         demo: (options) => {
//             const { code, path } = options
//             const file = fs.readFileSync(path).toString()
//             const parsed = baseParse(file).children.find(n => n.tag === 'demo')
//             const title = parsed.children[0].content
//             const main = file.split(parsed.loc.source).join('').trim()
//             return `export default function (Component) {
//                 Component.__sourceCode = ${
//                         JSON.stringify(main)
//                     }
//                 Component.__sourceCodeTitle = ${JSON.stringify(title)}
//               }`.trim()
//         }
//     }
// }
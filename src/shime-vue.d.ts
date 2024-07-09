declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions<{}, {}, any>
  export default component
}

// declare module '*.md' {
//   import type { ComponentOptions } from 'vue'
//   const Component: ComponentOptions
//   export default Component
// }
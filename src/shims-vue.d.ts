/* eslint-disable */

// For the editor to understand what a .vue file is
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

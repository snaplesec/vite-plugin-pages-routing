import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory
} from 'vue-router'
// @ts-ignore
import routes from 'pages-generated'

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./pages/*.vue')
// const routes = Object.keys(pages).map((path) => {
//   // @ts-ignore
//   const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
//   console.log('route name: ', name)
//   return {
//     path: name === '/home' ? '/' : name,
//     component: pages[path] // () => import('./pages/*.vue')
//   }
// })
const root = { path: '/', redirect: '/home' }
routes.push(root)
console.log('routes: ', routes)

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
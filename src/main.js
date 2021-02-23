import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from './router'

import store from './store'
import './index.css'
import 'windi.css'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  
  app.use(router)
  app.use(store)
  // console.log('routes: ', router.getRoutes())
  const isLoggedIn = false
  router.beforeEach((to, from, next) => {
    if (!isLoggedIn && to.meta.requiresAuth) next({ name: 'login' })
    else next()
  })
  
  return { app, router, store }
}
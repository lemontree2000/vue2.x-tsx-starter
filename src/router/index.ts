import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import layoutRoutes from './layout/index'
import pageRoutes from './pages/index'

Vue.use(VueRouter)
const routes: Array<RouteConfig> = [...layoutRoutes, ...pageRoutes]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

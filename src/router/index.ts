import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import layoutRoutes from './layout.route'

Vue.use(VueRouter)
const routes: Array<RouteConfig> = [...layoutRoutes]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

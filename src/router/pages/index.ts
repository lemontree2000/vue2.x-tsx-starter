import { RouteConfig } from 'vue-router'
const Home = () => import('@/views/Home.vue')

const pageRoutes: Array<RouteConfig> = [
  {
    path: '/About',
    name: 'index',
    component: Home
  }
]

export default pageRoutes

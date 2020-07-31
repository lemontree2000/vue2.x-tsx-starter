import { RouteConfig } from 'vue-router'

const Layout = () => import('@/components/Layout/index.vue')
const Dashboard = () => import('@/views/Dashboard/index.vue')

const layoutRoutes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: Dashboard
      }
    ]
  }
]

export default layoutRoutes

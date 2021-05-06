import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '../views/Recommend.vue'
import Singer from '../views/Singer.vue'
import TopList from '../views/TopList.vue'
import Search from '../views/Search.vue'
import SingerDetail from '../views/SingerDetail.vue'

const routes = [
  { path: '/', redirect: '/recommend' },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  },
  {
    path: '/singer',
    name: 'singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/top-list',
    name: 'top-list',
    component: TopList
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

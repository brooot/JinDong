/*
 * @Description: 文件描述
 * @Author: 小火龙
 * @Date: 2021-06-28 20:08:16
 * @LastEditTime: 2021-06-28 20:34:15
 * @FilePath: \Vue3 实战代码\京东项目练习\jindong\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

/*
 * @Description: 文件描述
 * @Author: 小火龙
 * @Date: 2021-06-28 20:08:16
 * @LastEditTime: 2021-07-05 10:33:32
 * @FilePath: \jindong\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'
import Register from '../views/register/Register'
import Login from '../views/login/Login'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next();
    }
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next();
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === "Login" || name === "Register");
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' });
})

export default router

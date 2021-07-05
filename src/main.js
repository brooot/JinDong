/*
 * @Description: 京东项目入口文件
 * @Author: 小火龙
 * @Date: 2021-06-28 20:08:16
 * @LastEditTime: 2021-06-30 12:12:49
 * @FilePath: \Vue3 实战代码\京东项目练习\jindong\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './style/index.scss'

createApp(App).use(store).use(router).mount('#app')

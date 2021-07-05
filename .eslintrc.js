/*
 * @Description: 文件描述
 * @Author: 小火龙
 * @Date: 2021-07-03 22:19:16
 * @LastEditTime: 2021-07-05 09:22:18
 * @FilePath: \JinDong\jindong\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}

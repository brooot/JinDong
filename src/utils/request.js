/*
 * @Description: 发送请求
 * @Author: 小火龙
 * @Date: 2021-07-05 09:23:51
 * @LastEditTime: 2021-07-14 15:29:33
 * @FilePath: \JinDong\src\utils\request.js
 */
import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  timeout: 10000
})

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, { params }, {
      baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

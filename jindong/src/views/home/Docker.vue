<!--
 * @Description: 文件描述
 * @Author: 小火龙
 * @Date: 2021-07-02 21:47:24
 * @LastEditTime: 2021-07-03 12:40:43
 * @FilePath: \Vue3 实战代码\京东项目练习\jindong\src\views\home\Docker.vue
-->
<template>
  <div class="docker">
    <div :class="{'docker__item': true, 'docker__item--active': index === 0}" v-for="(item, index) in dockerList" :key='item.icon'>
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe69a;', text: '首页' },
      { icon: '&#xe600;', text: '购物车' },
      { icon: '&#xe69a;', text: '订单' },
      { icon: '&#xe611;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>

<style lang='scss' scoped>
  @import '@/style/variables.scss';
  .docker {
    display: flex;
    box-sizing: border-box;
    padding: 0 .18rem;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .49rem;
    border-top: .01rem solid $content-bgColor;
    background: #FFFFFF;
    color: $content-fontColor;
    &__item {
      flex: 1;
      text-align: center;
      .iconfont {
        margin: .07rem 0 .02rem 0;
        font-size: .18rem;
      }
      &--active {
        color: #1FA4FC;
      }
    }
    &__title {
      font-size: .2rem;
      transform: scale(.5, .5);
      transform-origin: center top;
    }
  }
</style>

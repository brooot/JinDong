<!--
 * @Description: 静态区域
 * @Author: 小火龙
 * @Date: 2021-07-02 21:28:53
 * @LastEditTime: 2021-07-03 12:40:13
 * @FilePath: \Vue3 实战代码\京东项目练习\jindong\src\views\home\StaticPart.vue
-->
<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe608;</span>
    浙江省杭州市江干区文一苑4北607 项先生
    <span class="iconfont position__notice">&#xe616;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe615;</span>
    <span class="search__text">鸡崽欢乐小镇</span>
  </div>
  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      alt=""
    />
  </div>
  <div class="icons">
    <div class="icons__item" v-for="(item, index) in iconsList" :key="index">
      <img
        class="icons__item__img"
        :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
      />
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: "StaticPart",
  setup() {
    const iconsList = [
      { imgName: "超市", desc: "超市便利" },
      { imgName: "菜市场", desc: "菜市场" },
      { imgName: "水果店", desc: "水果店" },
      { imgName: "鲜花", desc: "鲜花" },
      { imgName: "医药健康", desc: "医药健康" },
      { imgName: "家居", desc: "家居时尚" },
      { imgName: "蛋糕", desc: "烘焙蛋糕" },
      { imgName: "签到", desc: "签到" },
      { imgName: "大牌免运", desc: "大牌免运" },
      { imgName: "红包", desc: "红包套餐" },
    ];
    return { iconsList };
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/variables.scss";
@import "@/style/mixins.scss";
.position {
  @include ellipsis;
  margin-right: 0.3rem;
  padding: 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  &__icon {
    position: relative;
    top: 0.01rem;
    margin-right: 0.08rem;
    // padding-left: .085rem;
    font-size: 0.2rem;
  }
  &__notice {
    position: absolute;
    right: 0.184rem;
    top: 0.175rem;
    font-size: 0.2rem;
  }
}
.search {
  line-height: 0.32rem;
  background-color: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  margin-bottom: 0.12rem;
  .iconfont {
    font-size: 0.23rem;
    display: inline-block;
    position: relative;
    top: 0.03rem;
    padding: 0rem 0.03rem 0rem 0.16rem;
  }
  &__text {
    font-size: 0.15rem;
    display: inline-block;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      text-align: center;
      margin: 0.06rem 0 0.16rem 0;
      color: $content-fontColor;
    }
  }
}
.gap {
  background-color: $content-bgColor;
  height: 0.1rem;
  margin: 0 -0.18rem;
}
</style>

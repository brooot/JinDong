<!--
 * @Description: 附近店铺
 * @Author: 小火龙
 * @Date: 2021-07-02 21:39:23
 * @LastEditTime: 2021-07-05 10:04:03
 * @FilePath: \jindong\src\views\home\Nearby.vue
-->

<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item" v-for="item in nearbyList" :key="item.id">
      <img :src="item.imgUrl" class="nearby__item__img" />
      <div class="nearby__content">
        <div class="nearby__content__title">{{ item.title }}</div>
        <div class="nearby__content__tags">
          <span
            class="nearby__content__tag"
            v-for="(tag, tag_index) in item.tags"
            :key="tag_index"
            >{{ tag }}</span
          >
        </div>
        <p class="nearby__content__highlight">{{ item.highlight }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nearby",
  setup() {
    const nearbyList = [
      {
        id: 1,
        title: "鸡哥小炒",
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        tags: ["月售1万+", "起送￥100+", "基础运费￥25"],
        highlight: "VIP尊享满89元减88元运费券（每月3张）",
      },
      {
        id: 2,
        title: "鸡哥小炒",
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        tags: ["月售1万+", "起送￥100+", "基础运费￥25"],
        highlight: "VIP尊享满89元减88元运费券（每月3张）",
      },
      {
        id: 3,
        title: "鸡哥小炒",
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        tags: ["月售1万+", "起送￥100+", "基础运费￥25"],
        highlight: "VIP尊享满89元减88元运费券（每月3张）",
      },
      {
        id: 4,
        title: "鸡哥小炒",
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        tags: ["月售1万+", "起送￥100+", "基础运费￥25"],
        highlight: "VIP尊享满89元减88元运费券（每月3张）",
      },
      {
        id: 5,
        title: "鸡哥小炒",
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        tags: ["月售1万+", "起送￥100+", "基础运费￥25"],
        highlight: "VIP尊享满89元减88元运费券（每月3张）",
      },
    ];
    return { nearbyList };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    color: $content-fontColor;
    font-weight: normal;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      width: 0.56rem;
      height: 0.56rem;
      margin-right: 0.16rem;
    }
  }
  &__content {
    flex: 1;
    border-bottom: 0.01rem solid #f1f1f1;
    padding-bottom: 0.12rem;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontColor;
    }
    &__tags {
      line-height: 0.18rem;
      font-size: 0.13rem;
      margin-top: 0.08rem;
      color: $content-fontColor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      color: #e93b3b;
      line-height: 0.18rem;
      font-size: 0.13rem;
      margin: 0.08rem 0 0 0;
    }
  }
}
</style>

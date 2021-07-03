<!--
 * @Description: 附近店铺
 * @Author: 小火龙
 * @Date: 2021-07-02 21:39:23
 * @LastEditTime: 2021-07-03 13:10:21
 * @FilePath: \Vue3 实战代码\京东项目练习\jindong\src\views\home\NearBy.vue
-->

<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item" v-for="item in nearbyList" :key="item.id">
      <img :src="item.imgUrl" class="nearby__item__img">
      <div class="nearby__content">
        <div class="nearby__content__title">{{item.title}}</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag" v-for="(tag, tag_index) in item.tags" :key="tag_index">{{tag}}</span>
        </div>
        <p class="nearby__content__highlight">{{item.highlight}}</p>
      </div>
    </div>
    <!-- <div class="nearby__item">
      <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby__item__img">
      <div class="nearby__content">
        <div class="nearby__content__title">鸡窝（民宿酒店）</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售2千+</span>
          <span class="nearby__content__tag">送鸡蛋</span>
          <span class="nearby__content__tag">鸡窝派对门票2张</span>
        </div>
        <p class="nearby__content__highlight">VIP可领取满2000元减1元优惠券</p>
      </div>
    </div>
    <div class="nearby__item">
      <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby__item__img">
      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">月售1万+</span>
        </div>
        <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</p>
      </div>
    </div>
    <div class="nearby__item">
      <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby__item__img">
      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">月售1万+</span>
        </div>
        <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</p>
      </div>
    </div>
    <div class="nearby__item">
      <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby__item__img">
      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">月售1万+</span>
        </div>
        <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [
      { id: 1, title: '鸡哥小炒', imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', tags: ['月售1万+', '起送￥100+', '基础运费￥25'], highlight: 'VIP尊享满89元减88元运费券（每月3张）' },
      { id: 2, title: '鸡哥小炒', imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', tags: ['月售1万+', '起送￥100+', '基础运费￥25'], highlight: 'VIP尊享满89元减88元运费券（每月3张）' },
      { id: 3, title: '鸡哥小炒', imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', tags: ['月售1万+', '起送￥100+', '基础运费￥25'], highlight: 'VIP尊享满89元减88元运费券（每月3张）' },
      { id: 4, title: '鸡哥小炒', imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', tags: ['月售1万+', '起送￥100+', '基础运费￥25'], highlight: 'VIP尊享满89元减88元运费券（每月3张）' },
      { id: 5, title: '鸡哥小炒', imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', tags: ['月售1万+', '起送￥100+', '基础运费￥25'], highlight: 'VIP尊享满89元减88元运费券（每月3张）' }
    ]
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/style/variables.scss';
  .nearby {
    &__title {
      margin: .16rem 0 .02rem 0;
      font-size: .18rem;
      color: $content-fontColor;
      font-weight: normal;
    }
    &__item {
      display: flex;
      padding-top: .12rem;
      &__img {
        width: .56rem;
        height: .56rem;
        margin-right: .16rem;
      }
    }
    &__content {
      flex: 1;
      border-bottom: .01rem solid #F1F1F1;
      padding-bottom: .12rem;
      &__title {
        line-height: .22rem;
        font-size: .16rem;
        color: $content-fontColor;
      }
      &__tags {
        line-height: .18rem;
        font-size: .13rem;
        margin-top: .08rem;
        color: $content-fontColor;
      }
      &__tag {
        margin-right: .16rem;
      }
      &__highlight {
        color: #E93B3B;
        line-height: .18rem;
        font-size: .13rem;
        margin: .08rem 0 0 0;
      }
    }
  }
</style>

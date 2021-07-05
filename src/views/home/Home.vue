<!--
 * @Description: 文件描述
 * @Author: 小火龙
 * @Date: 2021-07-02 21:15:36
 * @LastEditTime: 2021-07-02 21:54:25
 * @FilePath: \Vue3 实战代码\京东项目练习\jindong\src\views\home\Home.vue
-->
<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>

<script>
import StaticPart from "@/views/home/StaticPart";
import Nearby from "@/views/home/Nearby";
import Docker from "@/views/home/Docker";
export default {
  name: "Home",
  components: { StaticPart, Nearby, Docker },
};
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem 0.2rem 0.18rem;
}
</style>

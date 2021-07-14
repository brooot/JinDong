<!--
 * @Description: 弹框组件
 * @Author: 小火龙
 * @Date: 2021-07-13 20:26:39
 * @LastEditTime: 2021-07-14 11:16:57
 * @FilePath: \JinDong\src\components\Toast.vue
-->
<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  props: ["message"],
  name: "Toast",
};
export const useToastEffect = () => {
  const toastData = reactive({
    showToast: false,
    toastMessage: "",
  });
  const showToastMessage = (msg, fuc) => {
    toastData.showToast = true;
    toastData.toastMessage = msg;
    setTimeout(() => {
      toastData.showToast = false;
      toastData.toastMessage = "";
      if (fuc) fuc();
    }, 2000);
  };
  const { showToast, toastMessage } = toRefs(toastData);
  return { showToast, toastMessage, showToastMessage };
};
</script>

<style lang='scss' scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: #fff;
}
</style>
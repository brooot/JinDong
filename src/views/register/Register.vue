<!--
 * @Description: 注册
 * @Author: 小火龙
 * @Date: 2021-07-05 09:20:11
 * @LastEditTime: 2021-07-14 15:12:50
 * @FilePath: \JinDong\src\views\register\Register.vue
-->
<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入用户名"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
        autocomplete="new-password"
        v-model="password"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="确认密码"
        type="password"
        v-model="ensurement"
      />
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick">
      已有账号去登陆
    </div>
    <Toast v-if="showToast" :message="toastMessage" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "@/utils/request";
import Toast, { useToastEffect } from "@/components/Toast";

// 处理注册逻辑
const useRegisterEffect = (showToastMessage) => {
  const router = useRouter();
  const data = reactive({ username: "", password: "", ensurement: "" });
  const handleRegister = async () => {
    try {
      // 验证两个密码是否一样
      if (data.password !== data.ensurement) {
        showToastMessage("两次输入的密码不一样!");
        return;
      } else if (
        data.username == "" ||
        data.password == "" ||
        data.ensurement == ""
      ) {
        showToastMessage("用户名或密码不能为空!");
        return;
      }
      const result = await post("/api/user/register", {
        username: data.username,
        password: data.password,
      });
      console.log(result);
      if (result?.errno === 0) {
        new Promise((resolve, reject) => {
          showToastMessage("注册成功!即将前往登录页面!", resolve);
        }).then(() => {
          router.push({ name: "Login" });
        });
      } else {
        showToastMessage("注册失败");
      }
    } catch (error) {
      showToastMessage("请求失败");
    }
  };
  const { username, password, ensurement } = toRefs(data);
  return { handleRegister, username, password, ensurement };
};

// 处理登录跳转
const useLoginEffect = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push({ name: "Login" });
  };
  return { handleLoginClick };
};

export default {
  name: "Register",
  components: { Toast },
  setup() {
    const { showToast, toastMessage, showToastMessage } = useToastEffect();
    const { handleRegister, username, password, ensurement } =
      useRegisterEffect(showToastMessage);
    const { handleLoginClick } = useLoginEffect();
    return {
      handleLoginClick,
      handleRegister,
      showToast,
      toastMessage,
      username,
      password,
      ensurement,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    border-radius: 0.06rem;
    &__content {
      margin-top: 0.12rem;
      line-height: 0.22rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontColor;
      &::placeholder {
        color: $content-notice-fontColor;
      }
    }
  }
  &__register-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: $btn-bgColor;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: $bgColor;
    font-size: 0.16rem;
    text-align: center;
  }
  &__register-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontColor;
  }
}
</style>
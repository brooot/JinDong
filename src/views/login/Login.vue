<!--
 * @Description: 登陆
 * @Author: 小火龙
 * @Date: 2021-07-05 09:19:48
 * @LastEditTime: 2021-07-14 15:12:12
 * @FilePath: \JinDong\src\views\login\Login.vue
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
        placeholder="用户名"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
        v-model="password"
        autocomplete="new-password"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登陆</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
  </div>
  <Toast v-if="showToast" :message="toastMessage" />
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "../../utils/request";
import Toast, { useToastEffect } from "@/components/Toast";

const useLoginEffect = (showToastMessage) => {
  const router = useRouter();
  const data = reactive({ username: "", password: "" });

  const handleLogin = async () => {
    try {
      if (data.username == "" || data.password == "") {
        showToastMessage("用户名或密码不能为空!");
        return;
      }
      const result = await post("/api/user/login", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        localStorage.isLogin = true;
        new Promise((resolve, reject) => {
          showToastMessage("登陆成功", resolve);
        }).then(() => {
          router.push({ name: "Home" });
        });
      } else {
        showToastMessage("登陆失败");
      }
    } catch (e) {
      showToastMessage("请求失败");
    }
  };
  const { username, password } = toRefs(data);
  return { handleLogin, username, password };
};

const useRegisterEffect = () => {
  const router = useRouter();
  const handleRegisterClick = () => {
    router.push({ name: "Register" });
  };
  return { handleRegisterClick };
};

export default {
  name: "Login",
  components: { Toast },
  setup() {
    const { showToast, toastMessage, showToastMessage } = useToastEffect();
    const { handleLogin, username, password } =
      useLoginEffect(showToastMessage);
    const { handleRegisterClick } = useRegisterEffect();
    return {
      handleLogin,
      handleRegisterClick,
      username,
      password,
      showToast,
      toastMessage,
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
  &__login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: $bgColor;
    font-size: 0.16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontColor;
  }
}
</style>
<script setup>
import { Lock, User } from "@element-plus/icons-vue";
// 单独配置
definePageMeta({
  layout: false,
});

const loginFormRef = ref(null);
const loginForm = ref({
  username: "",
  password: "",
});
const loginRules = ref({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
const loginBtn = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      onLogin();
    } else {
      ElMessage.error("请输入用户名和密码");
    }
  });
};
const onLogin = async () => {
  const { data, error } = await useFetch("/api/login", {
    method: "POST",
    body: loginForm.value,
  });

  if (!error.value && data.value.success) {
    // 登录成功，跳转到 /admin/ 页面
    window.location.href = "/admin/";
  } else {
    // 登录失败，显示错误信息
    console.log(data.value.message || "登录失败，请稍后重试");
  }
};
</script>

<template>
  <div class="login-container">
    <div class="login-intro">
      <h1>后台</h1>
      <div class="desc">后台管理</div>
      <div class="login-bg"><img src="@/assets/login.png" alt="" /></div>
    </div>
    <div class="login-form">
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginRules"
        @keyup.enter="loginBtn"
      >
        <div class="login-title">登录</div>
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            :prefix-icon="User"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            :prefix-icon="Lock"
            show-password
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="login-button">
          <el-button type="primary" @click="loginBtn()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login-container {
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.login-intro {
  display: flex;
  flex-direction: column;
  width: 520px;
  flex: 0 1 auto;
}
.login-intro h1 {
  color: var(--el-color-primary);
}
.login-intro .desc {
  color: rgb(113, 115, 112);
  line-height: 32px;
  padding: 15px 0;
}
.login-bg img {
  width: 520px;
}
.login-form {
  background-color: #fff;
  flex: 0 1 auto;
  padding: 40px;
  border-radius: 6px;
  box-shadow: 1px 1px 8px #aaa6a6;
  box-sizing: border-box;

  :deep(.el-input) {
    height: 45px;
    margin-top: 5px;
    .el-input__inner {
      padding: 10px 15px 10px 5px;
      height: 45px;
      line-height: 45px;
      color: #666;
      font-size: 16px;
    }
  }
}
.login-title {
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
  font-size: 24px;
  color: #444;
  letter-spacing: 4px;
}
.login-button {
  :deep(.el-button--primary) {
    margin-top: 10px;
    width: 100%;
    height: 45px;
    font-size: 18px;
    letter-spacing: 8px;
  }
}
@media only screen and (max-width: 992px) {
  .login-intro {
    display: none;
  }
}
@media only screen and (max-width: 768px) {
  .login-container {
    background: #fff;
  }
  .login-intro {
    display: none;
  }
  .login-form {
    flex: 0 1 auto;
    border-radius: 0;
    box-shadow: none;
  }
}
</style>

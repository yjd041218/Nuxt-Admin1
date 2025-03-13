<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
// 单独配置
definePageMeta({
  layout: false,
});

const goTo = () => {
  router.push("/admin");
};
</script>

<template>
  <div class="container">
    <button @click="goTo">去管理</button>
  </div>
</template>

<style lang="less" scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

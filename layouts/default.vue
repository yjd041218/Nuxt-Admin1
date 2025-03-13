<script setup>
import Header from "./components/Header.vue";
import Aside from "./components/Aside.vue";
</script>

<template>
  <el-container class="layout-container">
    <Aside />
    <el-container>
      <el-header class="layout-header">
        <Header />
      </el-header>
      <el-main class="layout-main">
        <el-scrollbar class="layout-scrollbar">
          <div class="layout-card">
            <slot />
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.layout-container {
  display: flex;
  height: 100vh; // 设置容器高度为视口高度
}

.layout-container > el-container {
  display: flex;
  flex-direction: column;
  flex: 1; // 让右侧容器占据剩余空间
}

.layout-main {
  flex: 1; // 让 el-main 占据剩余空间
  overflow: auto; // 当内容超出时显示滚动条
  padding: 0px !important;
}

:root {
  --el-main-padding: 0px;
}

:deep(.el-header) {
  padding: 0 !important;
}
</style>

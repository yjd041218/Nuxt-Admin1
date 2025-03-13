<script setup>
import { HomeFilled, Search, FullScreen } from "@element-plus/icons-vue";

const fullScreen = () => {
  const doc = document.documentElement;
  if (!document.fullscreenElement) {
    if (doc.requestFullscreen) {
      doc.requestFullscreen();
    } else if (doc.webkitRequestFullscreen) {
      doc.webkitRequestFullscreen();
    } else if (doc.msRequestFullscreen) {
      doc.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
};
</script>

<template>
  <!-- 顶部栏 -->
  <header class="h-16 bg-white px-6 flex items-center justify-between">
    <div class="flex items-center">
      <el-icon class="text-xl mr-2"><HomeFilled /></el-icon>
      <span class="text-gray-600">首页</span>
    </div>
    <div class="flex items-center space-x-4">
      <el-icon class="text-xl cursor-pointer"><Search /></el-icon>
      <el-icon class="text-xl cursor-pointer" @click="fullScreen"
        ><FullScreen
      /></el-icon>
      <div class="flex items-center">
        <el-dropdown>
          <div class="user flex items-center cursor-pointer">
            <img
              class="w-8 h-8 rounded-full"
              src="https://ai-public.mastergo.com/ai/img_res/970599af5fd462814902e7b06e2e9c99.jpg"
              alt="Avatar"
            />
            <span class="ml-2 text-gray-600">管理员</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <nuxt-link to="/admin/system/user"> 个人中心 </nuxt-link>
              </el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-popconfirm title="Are you sure to delete this?">
          <template #reference> </template>
        </el-popconfirm>
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped></style>

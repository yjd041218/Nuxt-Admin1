<template>
  <div class="content bg-gray-50">
    <div class="flex">
      <el-tabs
        tab-position="left"
        style="height: 100%; width: 100%"
        class="tabs"
      >
        <el-tab-pane label="账户配置">
          <div class="user-info bg-white p-8">
            <div class="flex items-center mb-8">
              <div class="relative">
                <div
                  class="w-24 h-24 rounded-full bg-teal-400 flex items-center justify-center"
                >
                  <el-icon class="text-white text-4xl"><User /></el-icon>
                </div>
                <div
                  class="absolute bottom-0 right-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <el-icon><Camera /></el-icon>
                </div>
              </div>
              <div class="ml-6">
                <div class="flex items-center">
                  <h1 class="text-xl font-medium">系统管理员</h1>
                  <el-icon class="ml-2 cursor-pointer text-gray-400"
                    ><Edit
                  /></el-icon>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div class="flex">
                <div class="w-20 flex-shrink-0 text-gray-500">用户名</div>
                <div class="flex items-center">
                  <span>admin</span>
                  <el-icon class="ml-2 text-blue-500"><Male /></el-icon>
                </div>
              </div>

              <div class="flex">
                <div class="w-20 flex-shrink-0 text-gray-500">手机号码</div>
                <div>18888888888</div>
              </div>

              <div class="flex">
                <div class="w-20 flex-shrink-0 text-gray-500">邮箱</div>
                <div class="text-gray-400">未设置</div>
              </div>

              <div class="flex">
                <div class="w-20 flex-shrink-0 text-gray-500">部门</div>
                <div>tetet</div>
              </div>

              <div class="flex">
                <div class="w-20 flex-shrink-0 text-gray-500">角色</div>
                <div>管理员</div>
              </div>

              <div class="flex">
                <div class="w-20 flex-shrink-0 text-gray-500">创建日期</div>
                <div>XXXX-XX-XX</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="安全配置">安全配置</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { User, Camera, Edit, Male } from "@element-plus/icons-vue";
</script>

<style lang="less" scoped>
.content {
  padding-top: 15px;
  background-color: #f0f2f5;
  min-height: 100vh;
  .user-info {
    flex: 1;
  }
}
</style>

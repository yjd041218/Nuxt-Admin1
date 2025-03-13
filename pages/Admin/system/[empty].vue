<script setup>
const route = useRoute();
const { empty } = route.params;
</script>

<template>
  <div class="content">
    <el-empty>
      <el-button type="primary">{{ empty }}</el-button>
    </el-empty>
  </div>
</template>

<style lang="less" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

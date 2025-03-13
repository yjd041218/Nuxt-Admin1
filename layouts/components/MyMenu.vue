<template>
    <template v-for="(item, index) in menuList" :key="index">
        <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
            <template #title>
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
            </template>
            <!-- 递归调用自身组件渲染子菜单 -->
            <MyMenu :menuList="item.children" @clickNav="clickNavHandle" />
        </el-sub-menu>
        <el-menu-item v-else :index="item.path" @click="clickNavHandle(item.path)">
            <span>{{ item.name }}</span>
        </el-menu-item>
    </template>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    menuList: {
        type: Array,
        default: () => []
    }
});

const emits = defineEmits(['clickNav']);

const clickNavHandle = (path) => {
    emits('clickNav', path);
};
</script>

<style scoped>
/* 可以添加样式 */
</style>
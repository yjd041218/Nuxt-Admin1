<template>
  <aside class="w-64 bg-[#1e2837] text-white flex flex-col">
    <nav class="flex-1 py-4">
      <el-menu
        unique-opened
        active-text-color="#ffd04b"
        background-color="#1e2837"
        class="menu-list"
        default-active="2"
        text-color="#fff"
      >
        <div class="h-16 flex items-center px-4 border-b border-gray-700">
          <img src="../../assets/login.png" alt="Logo" class="w-8 h-8 mr-2" />
          <span class="text-xl font-medium">后台管理系统</span>
        </div>
        <MyMenu :menuList="list" @clickNav="clickNavHandle" />
      </el-menu>
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useFetch } from "#app";
import { useStore } from "@/composables/useStore";
import MyMenu from "./MyMenu.vue";
const store = useStore();
const router = useRouter();
// 获取菜单数据
const list = ref([]);
// 菜单点击事件
const clickNavHandle = (path) => {
  console.log(path);

  if (path == "/") {
    router.push("/admin");
    return;
  }
  router.push(`/admin/system${path}`);
};

// 模拟数据获取
const fetchMenuData = async () => {
  const { data, error } = await useFetch("/api/getMenu", {
    method: "GET",
  });
  if (!error.value) {
    list.value = [];
    list.value = data.value;
    store.updataMenuList(data.value);
  } else {
    console.error("获取菜单数据失败:", error.value);
  }
};
fetchMenuData();
</script>

<style lang="less" scoped>
aside {
  height: 100vh;
}

:deep(.is-active) {
  background-color: rgb(56, 189, 248) !important;
}
</style>

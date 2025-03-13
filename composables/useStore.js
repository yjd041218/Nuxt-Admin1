import { defineStore } from 'pinia'
import { piniaPluginPersistedstate } from '#imports';

import { createPinia } from 'pinia'
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export const useStore = defineStore('configStore', {
    state: () => ({
        count: 0,
        menuList: []
    }),
    // 选择持久化
    persist: {
        enabled: true,
    },
    getters: {
        doubleCount: (state) => state.count * 2,
        getisCollapsed: (state) => state.isCollapsed,
        getMenuList: (state) => state.menuList
    },
    actions: {
        setCollapse() {
            this.isCollapsed = !this.isCollapsed
        },
        updataMenuList(list) {
            this.menuList = list
        }
    },
})
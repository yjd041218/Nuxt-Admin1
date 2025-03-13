// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",
    "@prisma/nuxt"
  ],
  elementPlus: { /** Options */ },
  // 全局配置
  
  runtimeConfig: {
    // 只在服务端可获取
    isServer: "true",
    public: {
        // 在服务端 + 客户端都能获取
        baseUrl: "tests"
    }
}
})
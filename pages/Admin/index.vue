<template>
  <div class="container">
    <main class="flex-1 p-6">
      <!-- 欢迎信息 -->
      <div class="bg-white rounded-lg p-6 mb-6 flex items-center">
        <img
          class="w-16 h-16 rounded-full mr-4"
          src="https://ai-public.mastergo.com/ai/img_res/684c5a03c5756c165caba75c011e4ca0.jpg"
          alt="Welcome"
        />
        <div>
          <h2 class="text-xl font-medium mb-2">下午好，系统管理员！</h2>
          <p class="text-gray-500">
            今日天气晴朗，气温在 15℃ 至 25℃ 之间，东南风
          </p>
        </div>
      </div>

      <!-- 数据概览 -->
      <div class="grid grid-cols-2 gap-6 mb-6">
        <div class="bg-white rounded-lg p-6">
          <div class="flex justify-between items-center mb-4">
            <span class="text-gray-600">访客数(UV)</span>
            <span class="text-xs bg-green-100 text-green-600 px-2 py-1 rounded"
              >日</span
            >
          </div>
          <div class="flex items-end">
            <span class="text-3xl font-medium">223</span>
            <span class="ml-2 text-red-500 text-sm">↑ 1074%</span>
          </div>
          <div class="mt-2 text-gray-500 text-sm">总访客数 6974</div>
        </div>
        <div class="bg-white rounded-lg p-6">
          <div class="flex justify-between items-center mb-4">
            <span class="text-gray-600">浏览量(PV)</span>
            <span class="text-xs bg-green-100 text-green-600 px-2 py-1 rounded"
              >日</span
            >
          </div>
          <div class="flex items-end">
            <span class="text-3xl font-medium">1880</span>
            <span class="ml-2 text-red-500 text-sm">↑ 1690%</span>
          </div>
          <div class="mt-2 text-gray-500 text-sm">总浏览量 105995</div>
        </div>
      </div>

      <!-- 访问趋势图表 -->
      <div class="bg-white rounded-lg p-6 chart">
        <div id="chart1" style="width: 100%; height: 400px"></div>
        <div id="chart2" style="width: 100%; height: 400px"></div>
      </div>
    </main>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, onUnmounted } from "vue";

let chart1;
let chart2;

onMounted(() => {
  // 初始化第一个图表
  chart1 = echarts.init(document.getElementById("chart1"));

  // 生成随机数据
  const xData = [];
  const yData = [];
  for (let i = 0; i < 10; i++) {
    xData.push(`数据${i + 1}`);
    yData.push(Math.floor(Math.random() * 100));
  }

  // 配置项
  const option1 = {
    xAxis: {
      type: "category",
      data: xData,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: yData,
        type: "bar",
      },
    ],
  };

  // 使用配置项显示图表
  chart1.setOption(option1);

  // 初始化第二个图表
  chart2 = echarts.init(document.getElementById("chart2"));

  // 生成随机数据
  const pieData = [];
  for (let i = 0; i < 5; i++) {
    pieData.push({
      value: Math.floor(Math.random() * 100),
      name: `数据${i + 1}`,
    });
  }

  // 配置项
  const option2 = {
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "50%",
        data: pieData,
      },
    ],
  };

  // 使用配置项显示图表
  chart2.setOption(option2);

  // 监听窗口大小变化事件
  const handleResize = () => {
    chart1.resize();
    chart2.resize();
  };

  window.addEventListener("resize", handleResize);

  // 在组件卸载时移除事件监听器
  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
});
</script>

<style lang="less" scoped>
.container {
  min-height: 100vh;
  background-color: #f5f5f5;
}
.chart {
  display: flex;
  justify-content: space-between;
}
</style>

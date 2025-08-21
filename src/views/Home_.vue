<template>
  <div class="relative w-max-screen h-[400px] mx-auto bg-gray-50 rounded-full">
    <!-- 中心元素 -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full shadow-lg"
    >
      <h1 class="text-3xl font-bold underline">彰化市<br />中山國民小學</h1>
      <button type="button" class="mt-4">前往校園地圖 !</button>
    </div>

    <!-- 環繞項目 -->
    <div
      v-for="(item, index) in items"
      :key="index"
      class="absolute top-1/2 left-1/2 bg-green-300 p-3 rounded-full shadow-md"
      :style="orbitStyle(index)"
    >
      {{ item.name }}
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const items = ref([
  { name: "北棟教室" },
  { name: "森之屋" },
  { name: "文學詩牆" },
  { name: "中山校樹" },
  { name: "領角鴞樂園" },
  { name: "中山前庭" },
]);

const radius = 150; // 圓半徑 (px)
const orbitStyle = (index) => {
  const angle = (360 / items.value.length) * index;
  return {
    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
  };
};
</script>
<style scoped></style>

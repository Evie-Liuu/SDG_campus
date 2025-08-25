<template>
  <div class="pt-30 max-w-3xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">{{ selectedInfo.title }}</h1>
    <p class="text-gray-700 leading-relaxed">
      {{ selectedInfo.description }}
    </p>

    <div>
      <h1>留言</h1>
    </div>
    <router-link
      to="/sdgs"
      class="inline-block mt-6 text-blue-500 hover:underline"
    >
      ← 回上一頁
    </router-link>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
import infos from "@/data/ChungShan.json";

const props = defineProps({ id: String });
const selectedInfo = ref({});
selectedInfo.value = infos.find((item) => item.id === props.id * 1);
</script>
<style scoped>
</style>
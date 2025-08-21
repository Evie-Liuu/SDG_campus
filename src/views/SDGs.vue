<template class="h-max-screen w-min-screen">
  <header>
    <h1>中山SDGs記事</h1>
    <ul class="flex flex-row justify-evenly items-center">
      <li v-for="tab in headerTabs" :key="tab.value">
        <a
          href="#"
          :class="{ active: visibilityTab === tab.value }"
          @click="visibilityTab = tab.value"
          >{{ tab.name }}</a
        >
      </li>
    </ul>
  </header>
  <main class="grid grid-cols-1 gap-4">
    <section
      class="min-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden flex"
      v-for="info in filteredInfo"
      :key="info.id"
    >
      <img
        src="https://via.placeholder.com/150"
        alt="Card Image"
        class="w-1/2 object-cover"
      />
      <div class="p-4 flex flex-col justify-center">
        <h2 class="text-xl font-bold mb-2">{{ info.title }}</h2>
        <p class="text-gray-600 text-sm">{{ info.description }}</p>
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref, computed } from "vue";
import infos from "@/data/ChungShan.json";
const headerTabs = [
  {
    name: "全部",
    value: 0,
  },
  {
    name: "山野教育",
    value: 1,
  },
  {
    name: "社區踏查",
    value: 2,
  },
];
const visibilityTab = ref(headerTabs[0].value);

const filteredInfo = computed(() => {
  if (visibilityTab.value === 0) {
    return infos;
  }
  return infos.filter((info) => visibilityTab.value === info.type * 1);
});
</script>
<style scoped></style>

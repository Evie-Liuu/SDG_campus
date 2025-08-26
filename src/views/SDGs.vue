<template class="h-max-screen w-min-screen">
  <header
    class="flex flex-col items-center justify-center text-center pt-8 md:h-[35rem] bg-[url(@/assets/images/瓢蟲石頭.jpg)] bg-cover bg-center"
  >
    <h1 class="text-white text-5xl font-bold">中山SDGs記事</h1>
  </header>
  <main class="text-xl bg-gray-300 grid grid-cols-1 gap-4 p-5 pt-20">
    <section
      class="md:max-w-5xl md:mx-auto flex flex-row justify-between items-center w-full"
    >
      <ul
        ref="tabContainer"
        class="w-full flex flex-row items-center gap-5 h-10 flex-grow"
      >
        <li
          v-for="tab in visibleTabs"
          :key="tab.value"
          class="flex-shrink-0 h-full flex items-center"
        >
          <a
            href=""
            :class="{ active: visibilityTab === tab.value }"
            class="hover:bg-green-200 rounded p-2 px-3 whitespace-nowrap"
            @click.prevent="visibilityTab = tab.value"
            >{{ tab.name }}</a
          >
        </li>
        <li v-if="hiddenTabs.length" class="relative group flex-shrink-0">
          <a
            href="#"
            @click.prevent
            class="h-full cursor-pointer hover:bg-green-200 rounded p-2 px-3"
            >更多 ▾</a
          >
          <ul
            class="absolute top-8 left-1 bg-white shadow rounded hidden group-hover:block"
          >
            <li v-for="tab in hiddenTabs" :key="tab.value">
              <a
                href=""
                class="block px-4 py-2 bg-gray-100 hover:bg-green-200 whitespace-nowrap rounded"
                @click.prevent="visibilityTab = tab.value"
                >{{ tab.name }}</a
              >
            </li>
          </ul>
        </li>
      </ul>
      <div ref="rightTools" class="relative flex items-center">
        <button @click="showSearch = !showSearch" class="p-2">
          <i class="fa-solid fa-magnifying-glass text-2xl"></i>
        </button>
        <transition name="fade">
          <input
            v-if="showSearch"
            v-model="keyword"
            type="text"
            placeholder="搜尋..."
            class="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-48"
          />
        </transition>
        <a
          v-if="showSearch & keyword.length"
          href="#"
          class="absolute right-2"
          @click.prevent="keyword = ''"
        >
          <i class="fa-solid fa-xmark text-gray-400"></i>
        </a>
      </div>
    </section>
    <section
      class="cursor-pointer md:min-w-5xl md:mx-auto min-h-80 bg-white rounded-xl shadow-md overflow-hidden flex"
      v-for="info in filteredInfo"
      :key="info.id"
      @click="goToArticle(info.id)"
    >
      <img
        src="https://via.placeholder.com/150"
        alt="Card Image"
        class="w-1/2 object-cover"
      />
      <div class="p-4 flex flex-col justify-center">
        <h2 class="text-xl font-bold mb-2">{{ info.title }}</h2>
        <p class="text-gray-600 text-sm">{{ info.summary }}</p>
      </div>
    </section>
  </main>
  <Footer />
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import infos from "@/data/ChungShan.json";
import Footer from "@/components/Footer.vue";

// I've cleaned up the duplicate data for a better example
const headerTabs = ref([
  { name: "全部", value: 0 },
  { name: "山野教育", value: 1 },
  { name: "社區踏查", value: 2 },
  { name: "國際交流", value: 3 },
  { name: "生態環境", value: 4 },
  { name: "文化藝術", value: 5 },
  { name: "科技創新", value: 6 },
  { name: "健康福祉", value: 7 },
  { name: "社會實踐", value: 8 },
]);
const visibilityTab = ref(headerTabs.value[0].value);

const showSearch = ref(false);
const keyword = ref("");
const tabContainer = ref(null);
const rightTools = ref(null);
const visibleTabs = ref([]);
const hiddenTabs = ref([]);

const updateTabs = () => {
  // Ensure the container and tools refs are available
  if (!tabContainer.value || !rightTools.value) return;

  const container = tabContainer.value.parentNode;
  if (!container) return;

  const availableWidth =
    container.clientWidth - rightTools.value.offsetWidth - 20; // 20px buffer
  const moreButtonWidth = 300; // Estimated width for the 'More' button

  let usedWidth = 0;
  const newVisible = [];
  const newHidden = [];

  // This function now runs *after* all tabs are rendered in the DOM,
  // so it can correctly measure them.
  const items = tabContainer.value.querySelectorAll("li:not(.relative)");

  items.forEach((el, i) => {
    const tabData = headerTabs.value[i];
    if (!tabData) return;

    const w = el.offsetWidth;

    // Check if there's enough space for the current tab plus the 'More' button
    if (usedWidth + w < availableWidth - moreButtonWidth) {
      usedWidth += w;
      newVisible.push(tabData);
    } else {
      newHidden.push(tabData);
    }
  });

  // If there's only one hidden item, check if it can fit without the 'More' button
  if (newHidden.length === 1) {
    const lastItem = items[newVisible.length];
    if (lastItem && usedWidth + lastItem.offsetWidth < availableWidth) {
      newVisible.push(newHidden.shift());
    }
  }

  visibleTabs.value = newVisible;
  hiddenTabs.value = newHidden;
};

onMounted(() => {
  // 1. Initially, put all tabs into `visibleTabs` to force them to render.
  visibleTabs.value = [...headerTabs.value];

  // 2. Use nextTick to wait for the DOM to update.
  nextTick(() => {
    // 3. Now that all `<li>` are in the DOM, calculate which should be visible.
    updateTabs();

    window.addEventListener("resize", updateTabs);
  });
});

onUnmounted(() => {
  // Clean up the event listener to prevent memory leaks
  window.removeEventListener("resize", updateTabs);
});

const filteredInfo = computed(() => {
  let results = infos;

  // First, filter by the selected visibility tab
  if (visibilityTab.value !== 0) {
    results = infos.filter((info) => info.type * 1 === visibilityTab.value);
  }

  // Then, filter the results by the search keyword on the title
  if (keyword.value.trim() !== "") {
    results = results.filter((info) =>
      info.title.toLowerCase().includes(keyword.value.trim().toLowerCase())
    );
  }

  return results;
});

const router = useRouter();
const goToArticle = (id) => {
  router.push({ name: "article-detail", params: { id } });
};
</script>

<style scoped></style>

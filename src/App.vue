<template>
  <nav
    class="p-9 font-bold text-white text-2xl absolute w-full flex flex-row justify-between"
  >
    <router-link :to="{ hash: '#home' }"
      ><span class="text-3d">彰化市中山國民小學</span></router-link
    >
    <div class="flex flex-row justify-center gap-5 text-3d">
      <router-link :to="{ name: 'Home', hash: '#home' }"
        ><span class="pb-1 border-b border-transparent hover:border-white transition"
          >首頁</span
        ></router-link
      >
      <!-- <router-link :to="{ name: 'Home', hash: '#about' }">關於</router-link> | -->
      <router-link :to="{ name: 'Home', hash: '#explore' }"
        ><span class="pb-1 border-b border-transparent hover:border-white transition"
          >探索</span
        ></router-link
      >
      <router-link :to="{ name: 'Home', hash: '#sdgs' }"
        ><span class="pb-1 border-b border-transparent hover:border-white transition"
          >SDGs 記事</span
        >
      </router-link>
    </div>
  </nav>
  <router-view />
</template>
<script setup></script>

<style scoped></style>

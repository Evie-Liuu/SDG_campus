<template>
  <nav class="flex justify-between">
    <router-link :to="{ hash: '#home' }">彰化市中山國民國小</router-link>
    <div>
      <router-link :to="{ path: '/', hash: '#home' }">首頁</router-link> |
      <router-link :to="{ path: '/', hash: '#about' }">關於</router-link> |
      <router-link :to="{ path: '/', hash: '#explore' }">探索</router-link> |
      <router-link :to="{ path: '/', hash: '#sdgs' }">SDGs 記事</router-link>
    </div>
  </nav>
  <router-view />
</template>
<script setup></script>

<style scoped></style>

<template>
  <nav class="flex justify-between">
    <router-link :to="{ hash: '#home' }">彰化市中山國民國小</router-link>
    <div>
      <router-link :to="{ name: 'Home', hash: '#home' }">首頁</router-link> |
      <router-link :to="{ name: 'Home', hash: '#about' }">關於</router-link> |
      <router-link :to="{ name: 'Home', hash: '#explore' }">探索</router-link> |
      <router-link :to="{ name: 'Home', hash: '#sdgs' }">SDGs 記事</router-link>
    </div>
  </nav>
  <router-view />
</template>
<script setup></script>

<style scoped></style>

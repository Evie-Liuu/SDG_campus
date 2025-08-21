<template class="h-max-screen w-min-screen">
  <main class="grid grid-cols-1 gap-4">
    <section id="home" class="">
      <h1>Welcome to <br />中山國民國小</h1>
    </section>
    <section n id="about">
      <h1>關於</h1>
      <p></p>
    </section>
    <section id="explore">
      <h1>
        探索<br />
        <small>Let's discover</small>
      </h1>
    </section>
    <section id="sdgs">
      <h1></h1>
      <router-link
        to="/sdgs"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        前往中山 校園SDGsr記事
      </router-link>
    </section>
  </main>
  <footer class="mt-4">
    <h4>
      彰化縣中山國小<br />
      <small>ChungShan Elementary School</small>
    </h4>

    <p>TEL: (04)7222033</p>
    <p>50042 彰化縣彰化市中山路二段678號</p>
    <p>© 2025 Powered by 360 SDGs Team</p>
  </footer>
</template>
<script setup></script>
<style scoped></style>

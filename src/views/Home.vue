<template class="h-max-screen w-min-screen">
  <main class="grid grid-cols-1 gap-4">
    <section
      id="home"
      class="flex flex-col items-center justify-center text-center pt-8 sm:h-[35rem] bg-[url(@/assets/images/CS.jpg)] bg-cover bg-center"
    >
      <div class="text-white font-bold">
        <h1 class="text-4xl">Welcome to <br />中山國民國小</h1>
        <small> ChungShan Elementary School</small>
      </div>
    </section>
    <section n id="about">
      <h1>關於</h1>
      <p></p>
    </section>
    <section id="explore">
      <h1>
        探索<br />
        <small>Let's discover the school</small>
      </h1>
      <picture class="p-8 h-[20rem] bg-cover bg-center">
        <!-- <source srcset="" /> -->
        <img src="@/assets/images/CS_map_Filled.png" alt="" />
      </picture>
    </section>
    <section id="sdgs" class="flex flex-row">
      <div class="flex-1 p-6">
        <picture class="bg-cover bg-center">
          <!-- <source srcset="" /> -->
          <img src="@/assets/images/4_領角鴞樂園_2_v2.jpg" alt="" />
        </picture>
      </div>
      <div class="flex-1 p-6">
        <router-link
          to="/sdgs"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          前往中山 校園SDGs記事
        </router-link>
      </div>
    </section>
  </main>
  <footer class="flex flex-col md:flex-row justify-between items-center md:items-start p-6 bg-gray-100 gap-4">
    <div>
      <h4>
        彰化縣中山國小<br />
        <small>ChungShan Elementary School</small>
      </h4>
      <p>TEL: (04)7222033</p>
      <p>50042 彰化縣彰化市中山路二段678號</p>
      <p>© 2025 Powered by 360 SDGs Team</p>
    </div>
    <div class="w-full md:w-1/2 h-64">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.5586818024035!2d120.5461194!3d24.081840900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346938943fd9c315%3A0xa65e1c20a6bac76e!2sZhanghuaxianzhanghuashizhongshan%20Elementary%20School!5e0!3m2!1sen!2stw!4v1755770334991!5m2!1sen!2stw"
        class="w-full h-full border-0" 
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </footer>
</template>
<script setup></script>
<style scoped></style>

<template class="h-max-screen w-min-screen">
  <main class="grid grid-cols-1 md:gap-20">
    <section
      id="home"
      class="md:h-[1024px] flex flex-col items-center justify-center text-center pt-8 md:h-[35rem] bg-[url(@/assets/images/CS.jpg)] bg-cover bg-center"
    >
      <div class="text-white font-bold">
        <transition name="fade-slide" appear>
          <h1 v-if="showTitle" class="text-6xl text-3d font-huninn color-rrd">
            <span
              class="text-3xl transform -translate-x-30 block opacity-0 animate-first"
            >
              Welcome to
            </span>
            <span class="my-3 mb-5 block opacity-0 animate-second">中山國民小學 </span>
            <small v-if="showTitle" class="text-xl block opacity-0 animate-third"
              >ChungShan Elementary School</small
            >
          </h1>
        </transition>
      </div>
    </section>
    <section id="explore" class="md:w-[1000px] mx-auto md:h-[700px] md:my-auto">
      <h1 class="text-2xl">
        探索<br />
        <small class="text-gray-500">Let's discover the school</small>
      </h1>
      <picture class="h-[20rem] bg-cover bg-center">
        <!-- <source srcset="" /> -->
        <img src="@/assets/images/CS_map_Filled.png" alt="" />
      </picture>
    </section>
    <section id="sdgs" class="bg-gray-100 md:h-[600px] flex justify-center items-center">
      <div class="flex flex-row md:w-[1400px] mx-auto">
        <div
          class="flex-2 m-6 border-9 border-white"
          style="box-shadow: 10px 5px 10px -3px rgba(0, 0, 0, 0.3)"
        >
          <picture class="bg-cover bg-center">
            <!-- <source srcset="" /> -->
            <img src="@/assets/images/4_領角鴞樂園_2_v2.jpg" alt="" />
          </picture>
        </div>
        <div class="flex-1 p-6 relative">
          <router-link
            to="/sdgs"
            class="animate-bounce absolute top-50 -left-0 text-2xl bg-blue-500 p-8 rounded hover:bg-blue-600"
          >
            前往中山 校園SDGs記事
          </router-link>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>
<script setup>
import { ref, onMounted } from "vue";
import Footer from "@/components/Footer.vue";

const showTitle = ref(false);
onMounted(() => {
  showTitle.value = false;
  setTimeout(() => {
    showTitle.value = true;
  }, 50);
});
</script>
<style scoped></style>

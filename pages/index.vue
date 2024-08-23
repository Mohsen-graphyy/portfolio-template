<template>
  <div
    class="rounded-b-lg flex flex-col md:flex-row justify-between items-center">
    <div class="md:px-10">
      <h1 class="text-6xl rounded-lg text-violet-500 font-semibold">
        Mohsen Piri
      </h1>
      <h3 class="text-gray-400 mt-2">Front-end developer</h3>
      <p class="text-gray-500 mt-10 text-justify md:w-2/3 w-full">
        A responsible, punctual, and dedicated Frontend developer with over
        three years of professional experience in private and public companies.
      </p>
      <UButton class="mt-5" icon="">Download My Resume</UButton>
    </div>
    <div>
      <img
        src="/images/mohsen8-piri.png"
        class="rounded-lg"
        width="500"
        alt="" />
    </div>
  </div>
  <div class="mt-10">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam
    itaque quas, cumque in delectus placeat suscipit, officiis totam eum
    doloribus. Dolores libero in, laboriosam placeat ipsa minus eligendi eum!
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "home",
});
useHead({
  title: "Mohsen Piri",
});
</script>

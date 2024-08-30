<template>
  <UContainer
    class="rounded-b-lg flex flex-col md:flex-row justify-between items-center">
    <div>
      <h1 class="text-6xl rounded-lg text-violet-500 font-semibold">
        Mohsen Piri
      </h1>
      <h3 class="text-gray-400 mt-2">Front-end Engineer</h3>
      <p class="text-gray-500 mt-10 text-justify md:w-2/3 w-full">
        A responsible, punctual, and dedicated Frontend developer with over
        three years of professional experience in private and public companies.
      </p>
      <UButton class="mt-5" icon="">Download My Resume</UButton>
      <div class="flex items-center gap-4 mt-10">
        <UIcon class="w-8 h-8" name="i-logos-javascript" dynamic />
        <UIcon class="w-8 h-8" name="i-logos-vue" dynamic />
        <UIcon class="w-8 h-8" name="i-logos-nuxt-icon" dynamic />
        <UIcon class="w-8 h-8" name="i-logos-react" dynamic />
        <UIcon class="w-8 h-8" name="i-logos-typescript-icon" dynamic />
      </div>
    </div>
    <div class="hidden md:block rounded-full bg-violet-300 mt-12 md:mt-0">
      <img
        src="/images/mohsen8-piri.png"
        class="rounded-full"
        width="374px"
        height="498px"
        alt="mohsen piri محسن پیری" />
    </div>
  </UContainer>
  <div class="bg-violet-400 mt-10 py-4">
    <UContainer class="flex flex-col md:flex-row justify-between py-10">
      <div class="relative bg-violet-200 rounded-2xl mt-10">
        <img
          class="rounded-2xl border-4 drop-shadow-xl border-solid border-white md:-translate-y-10 md:translate-x-10"
          src="/images/mohsen-piri.jpg"
          width="374px"
          height="498px" />
      </div>
      <section class="flex flex-col justify-start items-start md:w-1/2">
        <p class="text-white font-bold text-2xl mt-10">About Me</p>
        <p class="text-justify text-violet-50 mt-4">
          I'm a passionate, self-proclaimed designer who specializes in full
          stack development (React.js & Node.js). I am enthusiastic about
          bringing the technical and visual aspects of digital products to life.
          User experience, pixel perfect design, and writing clear, readable,
          highly performant code matters to me. I began my journey as a web
          developer in 2015, and since then, I've continued to grow and evolve
          as a developer, taking on new challenges and learning the latest
          technologies along the way. Now, in my early thirties, 7 years after
          starting my web development journey, I'm building cutting-edge web
          applications using modern technologies such as Next.js, TypeScript,
          Nestjs, Tailwindcss, Supabase and much more. I am very much a
          progressive thinker and enjoy working on products end to end, from
          ideation all the way to development. When I'm not in full-on developer
          mode, you can find me hovering around on twitter or on indie hacker,
          witnessing the journey of early startups or enjoying some free time.
          You can follow me on Twitter where I share tech-related bites and
          build in public, or you can follow me on GitHub.
        </p>
      </section>
    </UContainer>
  </div>
  <BaseCurved class="before:bg-violet-400" />
</template>

<script setup lang="ts">
definePageMeta({
  name: "home",
});
useHead({
  title: "Mohsen Piri",
});
</script>

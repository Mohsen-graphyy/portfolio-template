<template>
  <div class="selection:bg-violet-400">
    <div class="sticky top-0 bg-white w-full py-4 drop-shadow-lg">
      <UContainer>
        <div class="hidden md:flex justify-between items-center w-full gap-10">
          <div class="flex items-center gap-12">
            <div class="flex items-center gap-3">
              <img src="/images/perp-MP-logo.png" width="25" height="25" />
              <h1>Mohsen Piri</h1>
            </div>
            <UHorizontalNavigation
              :links="links"
              class="w-fit border-b border-gray-200 dark:border-gray-800" />
          </div>
          <UButton
            icon="i-heroicons-chat-bubble-bottom-center-text"
            color="violet"
            >Contact Me</UButton
          >
        </div>
      </UContainer>
    </div>
    <UContainer>
      <slot></slot>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    label: "Installation",
    icon: "i-heroicons-home",
  },
  {
    label: "Horizontal Navigation",
    icon: "i-heroicons-chart-bar",
  },
  {
    label: "Command Palette",
    icon: "i-heroicons-command-line",
  },
];
</script>

<style>
html {
  background-color: rgb(243 244 246);
}
</style>

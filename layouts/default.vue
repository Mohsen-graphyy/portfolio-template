<template>
  <div class="selection:bg-violet-400 selection:text-white">
    <div class="w-full py-4 mb-10">
      <UContainer>
        <div class="hidden md:flex justify-between items-center w-full gap-10">
          <div class="flex items-center gap-12">
            <div class="flex items-center gap-3">
              <img src="/images/perp-MP-logo.png" width="25" height="25" />
              <h1>Mohsen Piri</h1>
            </div>
          </div>
          <UHorizontalNavigation
            class="w-auto"
            :links="links"
            :ui="{
              active:
                'text-gray-900 dark:text-white after:bg-violet-500 dark:after:bg-violet-400 after:rounded-full',
            }">
          </UHorizontalNavigation>
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
    to: "/",
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

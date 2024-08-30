<template>
  <div class="selection:bg-violet-400 selection:text-white">
    <div
      class="md:hidden p-4 flex justify-between items-center bg-white backdrop-blur border-b sticky top-0 left-0 z-50 border-gray-200 dark:border-gray-800">
      <div class="flex items-center gap-3">
        <img src="/images/perp-MP-logo.png" width="25" height="25" />
        <h1>Mohsen Piri</h1>
      </div>
      <UIcon
        class="text-violet-400 w-8 h-8"
        @click="isOpen = true"
        name="i-heroicons-bars-3-bottom-right-16-solid" />
    </div>
    <USlideover v-model="isOpen">
      <div class="p-4 flex flex-col w-full justify-end items-end">
        <UButton
          color="gray"
          variant="ghost"
          size="sm"
          icon="i-heroicons-x-mark-20-solid"
          class="flex sm:hidden sticky end-5 top-5 z-10"
          square
          padded
          @click="isOpen = false" />

        <UVerticalNavigation
          class="w-full mt-4"
          :links="links"
          :ui="{
            active:
              'text-gray-900 dark:text-white after:bg-violet-500 dark:after:bg-violet-400 after:rounded-full',
          }">
        </UVerticalNavigation>
        <Placeholder class="h-full" />
      </div>
    </USlideover>
    <div class="hidden md:block w-full py-4 mb-10">
      <UContainer>
        <div class="flex justify-between items-center w-full gap-10">
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

    <div class="pt-8 md:pt-0">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Life",
    icon: "i-heroicons-chart-bar",
  },
  {
    label: "Contact Me",
    icon: "i-heroicons-command-line",
  },
];
</script>

<style>
html {
  background-color: rgb(243 244 246);
}
</style>

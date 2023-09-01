<script lang="ts" setup>
withDefaults(defineProps<{
  label: string,
  type?: string,
  link?: boolean,
  href?: string
}>(), {link: false, type: "button"})
</script>

<template>
  <button v-if="!link"
          :type="type"
          class="tw-w-full tw-text-white tw-bg-primary-600 hover:bg-primary-700 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:bg-primary-600 dark:tw-hover:bg-primary-700 dark:tw-focus:ring-primary-800">
    {{ label }}
    <slot/>
  </button>
  <NuxtLink
      v-else
      :to="href"
      class="tw-w-full tw-text-white tw-bg-primary-600 hover:bg-primary-700 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:bg-primary-600 dark:tw-hover:bg-primary-700 dark:tw-focus:ring-primary-800"
  >{{ label }}
  </NuxtLink>
</template>

<style scoped></style>

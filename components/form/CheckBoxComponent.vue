<script lang="ts" setup>
defineProps<{
  label: string,
  modelValue: string
}>()
defineEmits(["update:modelValue"])
</script>

<template>
  <div class="tw-flex tw-items-start">
    <div class="tw-flex tw-items-center tw-h-5">
      <input
          class="tw-w-4 tw-h-4 tw-border tw-border-gray-300 tw-rounded tw-bg-gray-50 focus:ring-3 focus:tw-ring-primary-300 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:focus:ring-primary-600 dark:tw-ring-offset-gray-800"
          type="checkbox"
          @input="$emit('update:modelValue', $event.target.value)">
    </div>
    <div class="tw-ml-3 tw-text-sm">
      <label class="tw-text-gray-500 dark:tw-text-gray-300" for="remember">{{ label }}</label>
    </div>
  </div>
</template>

<style scoped></style>

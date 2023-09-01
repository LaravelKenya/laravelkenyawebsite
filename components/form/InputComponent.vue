<script lang="ts" setup>
withDefaults(defineProps<{
      label: string,
      type: string,
      placeholder: string,
      modelValue: string
    }>(),
    {
      placeholder: "",
      type: "text"
    })
defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">{{ label }}</label>
    <input
        :placeholder="placeholder"
        :type="type"
        class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-600 focus:border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
        @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<style scoped></style>

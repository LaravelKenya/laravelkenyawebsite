<script lang="ts" setup>
withDefaults(defineProps<{
  label: string,
  divClasses?: string,
  modelValue: "",
  placeholder?: "",
  rows?: number
}>(), {divClasses: "", placeholder: "", rows: 5})
const emits = defineEmits(["update:modelValue"])
</script>

<template>
  <div :class="divClasses">
    <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">{{ label }}</label>
    <textarea
        :placeholder="placeholder"
        :rows="rows"
        class="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        @input="$emit('update:modelValue', $event.target.value)"></textarea>
  </div>
</template>

<style scoped></style>

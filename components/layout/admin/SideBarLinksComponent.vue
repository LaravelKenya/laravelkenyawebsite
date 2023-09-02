<script lang="ts" setup>
const links = [
  {name: "Dashboard", href: "/admin/dashboard"},
  {name: "Events", href: "/admin/events"},
  {name: "Speakers", href: "/admin/speakers"},
  {name: "Contacts", href: "/admin/contacts"},
  {name: "Users", href: "/admin/users"},
  {name: "Settings", href: "/admin/settings"},
]
</script>

<template>
  <ul class="tw-pb-2 tw-space-y-2">
    <li v-for="(link, i) in links" :key="i">
      <NuxtLink
          :to="link.href"
          class="tw-flex tw-items-center tw-p-2 tw-text-base tw-text-gray-900 tw-rounded-lg hover:tw-bg-gray-100 group dark:tw-text-gray-200 dark:hover:tw-bg-gray-700">
        <svg
            class="tw-w-6 tw-h-6 tw-text-gray-500 tw-transition tw-duration-75 group-hover:tw-text-gray-900 dark:tw-text-gray-400 dark:group-hover:tw-text-white"
            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
        <span class="tw-ml-3">{{ link.name }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>

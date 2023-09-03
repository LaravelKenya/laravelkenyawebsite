<script lang="ts" setup>
import {initFlowbite} from "flowbite";

useSeoMeta({
  ogImage: '/seo/twitter-image.png',
  ogUrl: '[og:url]',
  twitterImage: '/seo/twitter-image.png',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/seo/logo.png'
    }
  ],
})
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <body class="tw-bg-gray-50 dark:tw-bg-gray-800">
  <div class="tw-bg-gray-50 tw-dark:bg-gray-800">
    <LayoutAdminNavBarComponent/>
    <div class="tw-flex tw-pt-16 tw-overflow-hidden tw-bg-gray-50 dark:tw-bg-gray-900">
      <LayoutAdminSideBarComponent/>
      <div id="sidebarBackdrop"
           class="tw-fixed tw-inset-0 tw-z-10 tw-hidden tw-bg-gray-900/50 dark:tw-bg-gray-900/90"></div>
      <slot/>
    </div>
  </div>
  </body>

</template>

<style scoped></style>

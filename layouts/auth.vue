<script lang="ts" setup>
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
</script>

<template>
  <section class="tw-bg-gray-50 dark:tw-bg-gray-900">
    <div
        class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-6 tw-py-8 tw-mx-auto md:tw-h-screen lg:tw-py-0">
      <a class="tw-flex tw-items-center tw-mb-6 tw-text-2xl tw-font-semibold tw-text-gray-900 dark:tw-text-white"
         href="#">
        <img alt="logo" class="tw-w-8 tw-h-8 tw-mr-2"
             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg">
        Laravel Kenya
      </a>
      <div
          class="tw-w-full tw-bg-white tw-rounded-lg tw-shadow dark:tw-border md:tw-mt-0 sm:tw-max-w-md xl:tw-p-0 dark:tw-bg-gray-800 dark:tw-border-gray-700">
        <slot/>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

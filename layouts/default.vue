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
  <div>
    <LayoutHeader>
      <template #hero>
        <div id="hero-area" class="hero-area-bg">
          <div class="overlay"></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-9 col-sm-12">
                <div class="contents text-center">
                  <div class="icon">
                    <i class="lni-mic"></i>
                  </div>
                  <h2 class="head-title">Laravel Kenya</h2>
                  <p class="banner-desc">
                    Welcome to Laravel Kenya Community.
                    Where Laravel And PHP Developers Connect, Collaborate and Learn Together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </LayoutHeader>
    <slot/>

    <LayoutFooter/>
  </div>
</template>

<style scoped></style>

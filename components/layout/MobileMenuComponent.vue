<script lang="ts" setup>
const mobileMenu = ref(false)
</script>

<template>
  <div class="mobile-menu" data-logo="/seo/logo.png">
    <div class="slicknav_menu">
      <div class="slicknav_brand">
        <NuxtLink to="/">
          <nuxt-img class="img-responsive" lazy src="/seo/logo.png"/>
        </NuxtLink>
      </div>
      <button class="slicknav_btn slicknav_collapsed"
              style="outline: none;"
              @click.prevent="mobileMenu = !mobileMenu">
        <span
            class="slicknav_icon slicknav_no-text">
              <span class="slicknav_icon-bar"></span>
              <span
                  class="slicknav_icon-bar"></span>
              <span class="slicknav_icon-bar"></span>
            </span>
      </button>
      <div :class="mobileMenu ? '' : 'hidden'" aria-hidden="true" class="slicknav_nav slicknav_hidden" role="menu">
        <LayoutNavLinksComponent/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>

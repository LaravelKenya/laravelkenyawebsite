<script lang="ts" setup>
const scrollingNavBarClass = ref<string>("")
const handleScroll = () => {
  if (window.scrollY > 200) {
    scrollingNavBarClass.value = "top-nav-collapse"
  } else {
    scrollingNavBarClass.value = ""
  }
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})


</script>

<template>
  <header id="header-wrap">
    <nav :class="scrollingNavBarClass" class="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar">
      <div class="container">
        <div class="theme-header clearfix">
          <NuxtLink class="navbar-brand" href="/"><img alt="" src="assets/img/laravel.png"></NuxtLink>
          <button aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"
                  class="navbar-toggler"
                  data-target="#navbarCollapse" data-toggle="collapse" type="button">
            <i class="lni-menu"></i>
          </button>
          <LayoutNavbarComponent/>
        </div>
      </div>
      <LayoutMobileMenuComponent/>
    </nav>

    <slot name="hero"/>
  </header>
</template>

<style scoped></style>

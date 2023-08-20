<script lang="ts" setup>
const scrollingNavBarClass = ref<string>("")
const handleScroll = () =>
{
  if (window.scrollY > 200)
  {
    scrollingNavBarClass.value = "top-nav-collapse"
  }else{
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
    <nav class="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar" :class="scrollingNavBarClass">
      <div class="container">
        <div class="theme-header clearfix">

          <a href="index.html" class="navbar-brand"><img src="assets/img/logo.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i class="lni-menu"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto w-100 justify-content-end">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Pages
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="about.html">About Us</a></li>
                  <li><a class="dropdown-item" href="gallery.html">Gallery</a></li>
                  <li><a class="dropdown-item" href="pricing.html">Pricing Table</a></li>
                  <li><a class="dropdown-item" href="sponsors.html">Sponsors</a></li>
                  <li><a class="dropdown-item" href="single-post.html">Single Post</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="schedule.html">
                  schedules
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="speakers.html">
                  Speakers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pricing.html">
                  Buy Tickets
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mobile-menu" data-logo="assets/img/logo.png"></div>
    </nav>

    <slot name="hero"/>
  </header>
</template>

<style scoped></style>

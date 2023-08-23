<script lang="ts" setup>
const checkIfActive = (path: string) => {
  const route = useRoute()
  return route.fullPath === path;
}
const links = [
  {name: "Home", href: "/",},
  {name: "Schedules", href: "/schedules",},
  {name: "Speakers", href: "/speakers"},
  {name: "Blog", href: "/blog"},
  {name: "Contact", href: "/contact"},
  {name: "About Us", href: "/about"}
]
</script>

<template>
  <ul class="navbar-nav mr-auto w-100 justify-content-end">
    <li v-for="(link, i) in links" :key="i+link.name" :class="checkIfActive(link.href) ? 'active': ''" class="nav-item">
      <NuxtLink :to="link.href" class="nav-link">
        {{ link.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>

<script lang="ts" setup>
import {useNavigationStore} from "~/stores/useNavigationStore";
import {useAuthStore} from "~/stores/useAuthStore";
import {MoonIcon, SunIcon} from "@heroicons/vue/24/solid";

const navigation = useNavigationStore()
const userOpen = ref<boolean>(false)
const toggleUser = () => {
  userOpen.value = !userOpen.value
}
const userTransformStyle = ref(""); // Initial transform style

const updateUserTransform = () => {
  // Calculate the desired transform values based on screen size
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    // For small screens, apply a different transform
    userTransformStyle.value = `
          position: absolute;
          inset: 0px auto auto 0px;
          margin: 0px;
          transform: translate3d(184.5px, 58px, 0px);
        `;
  } else {
    // For larger screens, reset the transform
    userTransformStyle.value = `
          position: absolute;
          inset: 0px auto auto 0px;
          margin: 0px;
          transform: translate(1714px, 61px);
        `;
  }
};

// Update the transform on component mount
onMounted(() => {
  updateUserTransform();
  window.addEventListener("resize", updateUserTransform);
});

// Remove the event listener when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateUserTransform);
});

// Watch for changes in userOpen and trigger transformation updates
watch(userOpen, updateUserTransform);
const auth = useAuthStore()

</script>

<template>
  <nav
      class="tw-fixed tw-z-30 tw-w-full tw-bg-white tw-border-b tw-border-gray-200 dark:tw-bg-gray-800 dark:tw-border-gray-700">
    <div class="tw-px-3 tw-py-3 lg:tw-px-5 lg:tw-pl-3">
      <div class="tw-flex tw-items-center tw-justify-between">
        <div class="tw-flex tw-items-center tw-justify-start">
          <button
              class="tw-p-2 tw-text-gray-600 tw-rounded tw-cursor-pointer lg:tw-hidden hover:tw-text-gray-900 hover:tw-bg-gray-100 focus:tw-bg-gray-100 dark:focus:tw-bg-gray-700 focus:tw-ring-2 focus:tw-ring-gray-100 dark:focus:tw-ring-gray-700 dark:tw-text-gray-400 dark:hover:tw-bg-gray-700 dark:hover:tw-text-white"
              @click.prevent="navigation.toggleSideBar()">
            <svg v-if="!navigation.sideBarOpen" class="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    fill-rule="evenodd"></path>
            </svg>
            <svg v-else class="tw-hidden tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    fill-rule="evenodd"></path>
            </svg>
          </button>
          <a class="tw-flex tw-ml-2 md:tw-mr-24" href="https://flowbite-admin-dashboard.vercel.app/">
            <img alt="FlowBite Logo" class="tw-h-8 tw-mr-3"
                 src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg"/>
            <span
                class="tw-self-center tw-text-xl tw-font-semibold sm:tw-text-2xl tw-whitespace-nowrap dark:tw-text-white">Flowbite</span>
          </a>
          <form action="#" class="tw-hidden lg:tw-block lg:tw-pl-3.5" method="GET">
            <label class="tw-sr-only" for="topbar-search">Search</label>
            <div class="tw-relative tw-mt-1 lg:tw-w-96">
              <div class="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3 tw-pointer-events-none">
                <svg class="tw-w-5 tw-h-5 tw-text-gray-500 dark:tw-text-gray-400" fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        fill-rule="evenodd"></path>
                </svg>
              </div>
              <input id="topbar-search"
                     class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-pl-10 tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     name="email"
                     placeholder="Search"
                     type="text">
            </div>
          </form>
        </div>
        <div class="tw-flex tw-items-center">

          <button id="toggleSidebarMobileSearch"
                  class="tw-p-2 tw-text-gray-500 tw-rounded-lg lg:tw-hidden hover:tw-text-gray-900 hover:tw-bg-gray-100 dark:tw-text-gray-400 dark:hover:tw-bg-gray-700 dark:hover:tw-text-white"
                  type="button">
            <span class="tw-sr-only">Search</span>

            <svg class="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    fill-rule="evenodd"></path>
            </svg>
          </button>

          <LayoutAdminNotifications/>

          <button id="theme-toggle"
                  class="tw-text-gray-500 dark:tw-text-gray-400 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700 focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-gray-200 dark:focus:tw-ring-gray-700 tw-rounded-lg tw-text-sm tw-p-2.5"
                  data-tooltip-target="tooltip-toggle"
                  type="button">
            <SunIcon class="tw-hidden tw-w-5 tw-h-5"/>
            <MoonIcon class="tw-w-5 tw-h-5"/>
          </button>
          <div id="tooltip-toggle"
               class="tw-absolute tw-z-10 tw-invisible tw-inline-block tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-transition-opacity tw-duration-300 tw-bg-gray-900 tw-rounded-lg tw-shadow-sm tw-opacity-0 tooltip"
               role="tooltip">
            Toggle dark mode
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>

          <div class="tw-flex tw-items-center tw-ml-3">
            <div>
              <button
                  class="tw-flex tw-text-sm tw-bg-gray-800 tw-rounded-full focus:tw-ring-4 focus:tw-ring-gray-300 dark:focus:tw-ring-gray-600"
                  type="button"
                  @click.prevent="toggleUser">
                <span class="tw-sr-only">Open user menu</span>
                <img alt="user photo" class="tw-w-8 tw-h-8 tw-rounded-full"
                     src="https://flowbite.com/docs/images/people/profile-picture-5.jpg">
              </button>
            </div>

            <div :class="userOpen ? 'tw-block' : 'tw-hidden'"
                 :style="userTransformStyle"
                 class="tw-z-50  tw-my-4 tw-text-base tw-list-none tw-bg-white tw-divide-y tw-divide-gray-100 tw-rounded tw-shadow dark:tw-bg-gray-700 dark:tw-divide-gray-600">
              <div class="tw-px-4 tw-py-3" role="none">
                <p class="tw-text-sm tw-text-gray-900 dark:tw-text-white" role="none">
                  {{ auth.user.name }}
                </p>
                <p class="tw-text-sm tw-font-medium tw-text-gray-900 tw-truncate dark:tw-text-gray-300" role="none">
                  {{ auth.user.email }}
                </p>
              </div>
              <ul class="tw-py-1" role="none">
                <li>
                  <NuxtLink
                      class="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100 dark:tw-text-gray-300 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white"
                      to="/admin/settings"
                  >Settings
                  </NuxtLink>
                </li>
                <li>
                  <a class="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100 dark:tw-text-gray-300 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white"
                     href="#"
                     role="menuitem">Earnings</a>
                </li>
                <li>
                  <button
                      class="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100 dark:tw-text-gray-300 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white"
                      @click.prevent="auth.logout"
                  >Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>

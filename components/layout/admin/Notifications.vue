<script lang="ts" setup>
const notificationOpen = ref<boolean>(false)
const transformX = ref<number>(0)
const transformY = ref<number>(0)
const toggleNotifications = () => {
  notificationOpen.value = !notificationOpen.value
}
const updateTransformValues = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  transformX.value = screenWidth * 0.5
  transformY.value = screenHeight * 0.1
}
onMounted(() => {
  updateTransformValues()
  window.addEventListener("resize", updateTransformValues)
})
</script>

<template>
  <button
      class="tw-p-2 tw-text-gray-500 tw-rounded-lg hover:tw-text-gray-900 hover:tw-bg-gray-100 dark:tw-text-gray-400 dark:hover:tw-text-white dark:hover:tw-bg-gray-700"
      type="button"
      @click.prevent="toggleNotifications">
    <span class="tw-sr-only">View notifications</span>

    <svg class="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
    </svg>
  </button>

  <div
      id="notification-dropdown" :class="notificationOpen ? 'tw-block' : 'tw-hidden'" :style="notificationOpen ?
      `position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(${transformX}px, ${transformY}px)` :
      ' position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1741px, 65px)'"
      class="tw-z-20 tw-z-50  tw-max-w-sm tw-my-4 tw-overflow-hidden tw-text-base tw-list-none tw-bg-white tw-divide-y tw-divide-gray-100 tw-rounded tw-shadow-lg dark:tw-divide-gray-600 dark:tw-bg-gray-700">
    <div
        class="tw-block tw-px-4 tw-py-2 tw-text-base tw-font-medium tw-text-center tw-text-gray-700 tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400">
      Notifications
    </div>
    <div>
      <a class="tw-flex tw-px-4 tw-py-3 tw-border-b hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:tw-border-gray-600"
         href="#">
        <div class="tw-flex-shrink-0">
          <img alt="Jese image"
               class="tw-rounded-full tw-w-11 tw-h-11"
               src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png">
          <div
              class="tw-absolute tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-ml-6 tw--mt-5 tw-border tw-border-white tw-rounded-full bg-primary-700 dark:tw-border-gray-700">
            <svg class="tw-w-3 tw-h-3 tw-text-white" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
              <path
                  d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
            </svg>
          </div>
        </div>
        <div class="tw-w-full tw-pl-3">
          <div class="tw-text-gray-500 tw-font-normal tw-text-sm tw-mb-1.5 dark:tw-text-gray-400">New message
            from <span
                class="tw-font-semibold tw-text-gray-900 dark:tw-text-white">Bonnie Green</span>: "Hey, what's
            up? All set
            for the presentation?"
          </div>
          <div class="tw-text-xs tw-font-medium text-primary-700 dark:text-primary-400">a few moments ago</div>
        </div>
      </a>
      <a class="tw-flex tw-px-4 tw-py-3 tw-border-b hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:tw-border-gray-600"
         href="#">
        <div class="tw-flex-shrink-0">
          <img alt="Jese image"
               class="tw-rounded-full tw-w-11 tw-h-11"
               src="https://flowbite-admin-dashboard.vercel.app/images/users/jese-leos.png">
          <div
              class="tw-absolute tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-ml-6 tw--mt-5 tw-bg-gray-900 tw-border tw-border-white tw-rounded-full dark:tw-border-gray-700">
            <svg class="tw-w-3 tw-h-3 tw-text-white" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
            </svg>
          </div>
        </div>
        <div class="tw-w-full tw-pl-3">
          <div class="tw-text-gray-500 tw-font-normal tw-text-sm tw-mb-1.5 dark:tw-text-gray-400"><span
              class="tw-font-semibold tw-text-gray-900 dark:tw-text-white">Jese leos</span> and <span
              class="tw-font-medium tw-text-gray-900 dark:tw-text-white">5 others</span> started following you.
          </div>
          <div class="tw-text-xs tw-font-medium text-primary-700 dark:text-primary-400">10 minutes ago</div>
        </div>
      </a>
      <a class="tw-flex tw-px-4 tw-py-3 tw-border-b hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:tw-border-gray-600"
         href="#">
        <div class="tw-flex-shrink-0">
          <img alt="Joseph image"
               class="tw-rounded-full tw-w-11 tw-h-11"
               src="https://flowbite-admin-dashboard.vercel.app/images/users/joseph-mcfall.png">
          <div
              class="tw-absolute tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-ml-6 tw--mt-5 tw-bg-red-600 tw-border tw-border-white tw-rounded-full dark:tw-border-gray-700">
            <svg class="tw-w-3 tw-h-3 tw-text-white" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    fill-rule="evenodd"></path>
            </svg>
          </div>
        </div>
        <div class="tw-w-full tw-pl-3">
          <div class="tw-text-gray-500 tw-font-normal tw-text-sm tw-mb-1.5 dark:tw-text-gray-400"><span
              class="tw-font-semibold tw-text-gray-900 dark:tw-text-white">Joseph Mcfall</span> and <span
              class="tw-font-medium tw-text-gray-900 dark:tw-text-white">141 others</span> love your story. See
            it and
            view more stories.
          </div>
          <div class="tw-text-xs tw-font-medium text-primary-700 dark:text-primary-400">44 minutes ago</div>
        </div>
      </a>
      <a class="tw-flex tw-px-4 tw-py-3 tw-border-b hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:tw-border-gray-600"
         href="#">
        <div class="tw-flex-shrink-0">
          <img alt="Leslie image"
               class="tw-rounded-full tw-w-11 tw-h-11"
               src="https://flowbite-admin-dashboard.vercel.app/images/users/leslie-livingston.png">
          <div
              class="tw-absolute tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-ml-6 tw--mt-5 tw-bg-green-400 tw-border tw-border-white tw-rounded-full dark:tw-border-gray-700">
            <svg class="tw-w-3 tw-h-3 tw-text-white" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    fill-rule="evenodd"></path>
            </svg>
          </div>
        </div>
        <div class="tw-w-full tw-pl-3">
          <div class="tw-text-gray-500 tw-font-normal tw-text-sm tw-mb-1.5 dark:tw-text-gray-400"><span
              class="tw-font-semibold tw-text-gray-900 dark:tw-text-white">Leslie Livingston</span> mentioned
            you in a
            comment: <span class="tw-font-medium text-primary-700 dark:text-primary-500">@bonnie.green</span>
            what
            do you say?
          </div>
          <div class="tw-text-xs tw-font-medium text-primary-700 dark:text-primary-400">1 hour ago</div>
        </div>
      </a>
      <a class="tw-flex tw-px-4 tw-py-3 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600" href="#">
        <div class="tw-flex-shrink-0">
          <img alt="Robert image"
               class="tw-rounded-full tw-w-11 tw-h-11"
               src="https://flowbite-admin-dashboard.vercel.app/images/users/robert-brown.png">
          <div
              class="tw-absolute tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-ml-6 tw--mt-5 tw-bg-purple-500 tw-border tw-border-white tw-rounded-full dark:tw-border-gray-700">
            <svg class="tw-w-3 tw-h-3 tw-text-white" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
          </div>
        </div>
        <div class="tw-w-full tw-pl-3">
          <div class="tw-text-gray-500 tw-font-normal tw-text-sm tw-mb-1.5 dark:tw-text-gray-400"><span
              class="tw-font-semibold tw-text-gray-900 dark:tw-text-white">Robert Brown</span> posted a new
            video:
            Glassmorphism - learn how to implement the new design trend.
          </div>
          <div class="tw-text-xs tw-font-medium text-primary-700 dark:text-primary-400">3 hours ago</div>
        </div>
      </a>
    </div>
    <a class="tw-block tw-py-2 tw-text-base tw-font-normal tw-text-center tw-text-gray-900 tw-bg-gray-50 hover:tw-bg-gray-100 dark:tw-bg-gray-700 dark:tw-text-white dark:hover:tw-underline"
       href="#">
      <div class="tw-inline-flex tw-items-center ">
        <svg class="tw-w-5 tw-h-5 tw-mr-2" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
          <path clip-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                fill-rule="evenodd"></path>
        </svg>
        View all
      </div>
    </a>
  </div>
</template>

<style scoped></style>

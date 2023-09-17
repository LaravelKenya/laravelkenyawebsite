<script lang="ts" setup>
import {ChevronRightIcon, HomeIcon} from "@heroicons/vue/20/solid";
import {useEventsStore} from "~/stores/useEventsStore";

definePageMeta({
  layout: "admin",
  middleware: "auth"
})
const getEventId = () => {
  const route = useRoute()
  return parseInt(<string>route.params.id)
}
const eventsStore = useEventsStore()
eventsStore.getEvent(getEventId())
</script>

<template>
  <div id="main-content"
       class="tw-relative tw-w-full tw-h-full tw-overflow-y-auto tw-bg-gray-50 lg:tw-ml-64 dark:tw-bg-gray-900">
    <main>
      <div
          class="tw-p-4 tw-bg-white tw-block sm:tw-flex tw-items-center tw-justify-between tw-border-b tw-border-gray-200 lg:tw-mt-1.5 dark:tw-bg-gray-800 dark:tw-border-gray-700">
        <div class="tw-w-full tw-mb-1">
          <div class="tw-mb-4">
            <nav aria-label="Breadcrumb" class="tw-flex tw-mb-5">
              <ol class="tw-inline-flex tw-items-center tw-space-x-1 tw-text-sm tw-font-medium md:tw-space-x-2">
                <li class="tw-inline-flex tw-items-center">
                  <NuxtLink
                      class="tw-inline-flex tw-items-center tw-text-gray-700 hover:text-primary-600 dark:tw-text-gray-300 dark:hover:tw-text-white"
                      to="/admin/dashboard">
                    <HomeIcon class="tw-w-5 tw-h-5 tw-mr-2.5"/>
                    Home
                  </NuxtLink>
                </li>
                <li>
                  <div class="tw-flex tw-items-center">
                    <ChevronRightIcon class="tw-w-6 tw-h-6 tw-text-gray-400"/>
                    <p
                        class="tw-ml-1 tw-text-gray-700 hover:text-primary-600 md:tw-ml-2 dark:tw-text-gray-300 dark:hover:tw-text-white"
                    >Events</p>
                  </div>
                </li>
                <li>
                  <div class="tw-flex tw-items-center">
                    <ChevronRightIcon class="tw-w-6 tw-h-6 tw-text-gray-400"/>
                    <p
                        class="tw-ml-1 tw-text-gray-700 hover:text-primary-600 md:tw-ml-2 dark:tw-text-gray-300 dark:hover:tw-text-white"
                    >Events</p>
                  </div>
                </li>

              </ol>
            </nav>
            <h1 class="tw-text-xl tw-font-semibold tw-text-gray-900 sm:tw-text-2xl dark:tw-text-white">All
              Events</h1>
          </div>
        </div>
      </div>
      <div class="tw-grid tw-w-full tw-grid-cols-1 tw-gap-4 tw-mt-4 xl:tw-grid-cols-2 2xl:tw-grid-cols-3">
        <div
            class="tw-items-center tw-justify-between tw-p-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm sm:tw-flex dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-900">
          <div class="tw-w-full">
            <h3 class="tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">Users</h3>
            <span
                class="tw-text-2xl tw-font-bold tw-leading-none tw-text-gray-900 sm:tw-text-3xl dark:tw-text-white">Test
          </span>
            <p class="tw-flex tw-items-center tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">
            <span class="tw-flex tw-items-center tw-mr-1.5 tw-text-sm tw-text-green-500 dark:tw-text-green-400">
              <svg aria-hidden="true" class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                      fill-rule="evenodd"></path>
              </svg>
              3,4%
            </span>
              Since last month
            </p>
          </div>
          <div id="week-signups-chart" class="tw-w-full"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>

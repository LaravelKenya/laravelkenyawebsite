<script lang="ts" setup>

import {DashboardData} from "~/types/types";

definePageMeta({
  layout: "admin",
  middleware: "auth"
})
useHead({
  title: "Admin / Dashboard"
})
const dashboardData = ref<DashboardData>({
  users: 0,
  events: 0,
  feedbacks: 0,
  speakers: 0
})
const fetchDashboardData = async () => {
  const {data, error} = await useApiFetch("/api/dashboard")
  dashboardData.value = data.value as DashboardData
}
fetchDashboardData()
</script>

<template>
  <div id="main-content"
       class="tw-relative tw-w-full tw-h-full tw-overflow-y-auto tw-bg-gray-50 lg:tw-ml-64 dark:tw-bg-gray-800">
    <main>
      <div class="tw-px-4 tw-pt-6">
        <div class="tw-grid tw-w-full tw-grid-cols-1 tw-gap-4 tw-mt-4 xl:tw-grid-cols-2 2xl:tw-grid-cols-3">
          <div
              class="tw-items-center tw-justify-between tw-p-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm sm:tw-flex dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-900">
            <div class="tw-w-full">
              <h3 class="tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">Events</h3>
              <span
                  class="tw-text-2xl tw-font-bold tw-leading-none tw-text-gray-900 sm:tw-text-3xl dark:tw-text-white">{{
                  dashboardData.events
                }}</span>
              <p class="tw-flex tw-items-center tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">
            <span class="tw-flex tw-items-center tw-mr-1.5 tw-text-sm tw-text-green-500 dark:tw-text-green-400">
              <svg aria-hidden="true" class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                      fill-rule="evenodd"></path>
              </svg>
              12.5%
            </span>
                Since last month
              </p>
            </div>
            <div id="new-products-chart" class="tw-w-full"></div>
          </div>
          <div
              class="tw-items-center tw-justify-between tw-p-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm sm:tw-flex dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-900">
            <div class="tw-w-full">
              <h3 class="tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">Users</h3>
              <span
                  class="tw-text-2xl tw-font-bold tw-leading-none tw-text-gray-900 sm:tw-text-3xl dark:tw-text-white">{{
                  dashboardData.users
                }}</span>
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
          <div
              class="tw-p-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-900">
            <div class="tw-w-full">
              <h3 class="tw-mb-2 tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">Audience by
                age</h3>
              <div class="tw-flex tw-items-center tw-mb-2">
                <div class="tw-w-16 tw-text-sm tw-font-medium dark:tw-text-white">50+</div>
                <div class="tw-w-full tw-bg-gray-200 tw-rounded-full tw-h-2.5 dark:tw-bg-gray-700">
                  <div class="bg-primary-600 tw-h-2.5 tw-rounded-full dark:bg-primary-500" style="width: 18%"></div>
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-mb-2">
                <div class="tw-w-16 tw-text-sm tw-font-medium dark:tw-text-white">40+</div>
                <div class="tw-w-full tw-bg-gray-200 tw-rounded-full tw-h-2.5 dark:tw-bg-gray-700">
                  <div class="bg-primary-600 tw-h-2.5 tw-rounded-full dark:bg-primary-500" style="width: 15%"></div>
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-mb-2">
                <div class="tw-w-16 tw-text-sm tw-font-medium dark:tw-text-white">30+</div>
                <div class="tw-w-full tw-bg-gray-200 tw-rounded-full tw-h-2.5 dark:tw-bg-gray-700">
                  <div class="bg-primary-600 tw-h-2.5 tw-rounded-full dark:bg-primary-500" style="width: 60%"></div>
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-mb-2">
                <div class="tw-w-16 tw-text-sm tw-font-medium dark:tw-text-white">20+</div>
                <div class="tw-w-full tw-bg-gray-200 tw-rounded-full tw-h-2.5 dark:tw-bg-gray-700">
                  <div class="bg-primary-600 tw-h-2.5 tw-rounded-full dark:bg-primary-500" style="width: 30%"></div>
                </div>
              </div>
            </div>
            <div id="traffic-channels-chart" class="tw-w-full"></div>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<style scoped></style>

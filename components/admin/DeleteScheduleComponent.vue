<script lang="ts" setup>
import {useNavigationStore} from "~/stores/useNavigationStore";
import {XMarkIcon} from "@heroicons/vue/24/solid";

const navigationStore = useNavigationStore()
</script>

<template>
  <div :class="navigationStore.deleteScheduleOpen ? 'tw-flex' : 'tw-hidden'"
       aria-modal="true"
       class="tw-fixed tw-left-0 tw-right-0 tw-z-50 tw-items-center tw-justify-center tw-overflow-x-hidden tw-overflow-y-auto tw-top-4 md:tw-inset-0 h-modal sm:tw-h-full "
       role="dialog">
    <div class="tw-relative tw-w-full tw-h-full tw-max-w-md tw-px-4 md:tw-h-auto">
      <!-- Modal content -->
      <div class="tw-relative tw-bg-white tw-rounded-lg tw-shadow dark:tw-bg-gray-800">
        <!-- Modal header -->
        <div class="tw-flex tw-justify-end tw-p-2">
          <button
              class="tw-text-gray-400 tw-bg-transparent hover:tw-bg-gray-200 hover:tw-text-gray-900 tw-rounded-lg tw-text-sm tw-p-1.5 tw-ml-auto tw-inline-flex tw-items-center dark:hover:tw-bg-gray-700 dark:hover:tw-text-white"
              type="button"
              @click.prevent="navigationStore.deleteScheduleModal(false)">
            <XMarkIcon class="tw-w-5 tw-h-5"/>
          </button>
        </div>
        <!-- Modal body -->
        <div class="tw-p-6 tw-pt-0 tw-text-center">
          <svg class="tw-w-16 tw-h-16 tw-mx-auto tw-text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"></path>
          </svg>
          <h3 class="tw-mt-5 tw-mb-6 tw-text-lg tw-text-gray-500 dark:tw-text-gray-400">Are you sure you want to delete
            this user?</h3>
          <a class="tw-text-white tw-bg-red-600 hover:tw-bg-red-800 focus:tw-ring-4 focus:tw-ring-red-300 tw-font-medium tw-rounded-lg tw-text-base tw-inline-flex tw-items-center tw-px-3 tw-py-2.5 tw-text-center tw-mr-2 dark:focus:tw-ring-red-800"
             href="#">
            Yes, I'm sure
          </a>
          <button
              class="tw-text-gray-900 tw-bg-white hover:tw-bg-gray-100 focus:tw-ring-4 focus:ring-primary-300 tw-border tw-border-gray-200 tw-font-medium tw-inline-flex tw-items-center tw-rounded-lg tw-text-base tw-px-3 tw-py-2.5 tw-text-center dark:tw-bg-gray-800 dark:tw-text-gray-400 dark:tw-border-gray-600 dark:hover:tw-text-white dark:hover:tw-bg-gray-700 dark:focus:tw-ring-gray-700"
              type="button"
              @click.prevent="navigationStore.deleteScheduleModal(false)"
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

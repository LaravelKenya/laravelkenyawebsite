<script lang="ts" setup>
import {XMarkIcon} from "@heroicons/vue/24/solid";
import {useNavigationStore} from "~/stores/useNavigationStore";
import {Schedules} from "~/types/types";

const navigationStore = useNavigationStore()
const schedule = ref<Schedules>({
  eventId: 0,
  startTime: '',
  endTime: '',
  description: "",
})
</script>

<template>
  <div :class="navigationStore.scheduleModalOpen ? 'tw-flex' : 'tw-hidden'"
       aria-modal="true"
       class="tw-flex tw-overflow-y-auto tw-overflow-x-hidden tw-fixed tw-top-0 tw-right-0 tw-left-0 tw-z-50 tw-justify-center tw-items-center tw-w-full md:tw-inset-0 h-modal md:tw-h-full"
       role="dialog"
       tabindex="-1">
    <div class="tw-relative tw-p-4 tw-w-full tw-max-w-2xl tw-h-full md:tw-h-auto">
      <!-- Modal content -->
      <div class="tw-relative tw-p-4 tw-bg-white tw-rounded-lg tw-shadow dark:tw-bg-gray-800 sm:tw-p-5">
        <!-- Modal header -->
        <div
            class="tw-flex tw-justify-between tw-items-center tw-pb-4 tw-mb-4 tw-rounded-t tw-border-b sm:tw-mb-5 dark:tw-border-gray-600">
          <h3 class="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">
            Add Schedule
          </h3>
          <button
              class="tw-text-gray-400 tw-bg-transparent hover:tw-bg-gray-200 hover:tw-text-gray-900 tw-rounded-lg tw-text-sm tw-p-1.5 tw-ml-auto tw-inline-flex tw-items-center dark:hover:tw-bg-gray-600 dark:hover:tw-text-white"
              type="button"
              @click.prevent="navigationStore.addScheduleModal(false)">
            <XMarkIcon class="tw-w-5 tw-h-5"/>
            <span class="tw-sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form action="#">
          <div class="tw-grid tw-gap-4 tw-mb-4 sm:tw-grid-cols-2">
            <FormInputComponent label="Event Name"/>
            <FormInputComponent label="Event Location"/>
            <FormInputComponent v-model="schedule.startTime" label="Start Time" type="date"/>
            <FormInputComponent v-model="schedule.endTime" label="End Time" type="date"/>
            <div class="sm:tw-col-span-2">
              <FormTextAreaComponent v-model="schedule.description" label="Description"/>
            </div>
          </div>
          <div class="tw-flex tw-items-center tw-space-x-4">
            <FormButtonComponent label="Add Schedule" type="button"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

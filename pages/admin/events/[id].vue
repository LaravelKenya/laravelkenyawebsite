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

const eventDetails = [
  {
    label: "Event Name",
    value: eventsStore.event.name
  },
  {
    label: "Event Location",
    value: eventsStore.event.location
  },
  {
    label: "Event Date",
    value: eventsStore.event.date
  }

]
</script>

<template>
  <div id="main-content"
       class="tw-relative tw-w-full tw-h-full tw-overflow-y-auto tw-bg-gray-50 lg:tw-ml-64 dark:tw-bg-gray-800">
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
                    <NuxtLink
                        class="tw-ml-1 tw-text-gray-700 hover:text-primary-600 md:tw-ml-2 dark:tw-text-gray-300 dark:hover:tw-text-white"
                        to="/admin/events"
                    >Events
                    </NuxtLink>
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
            <NuxtLink
                class="focus:tw-outline-none tw-text-white tw-bg-red-700 hover:tw-bg-red-800 focus:tw-ring-4 focus:tw-ring-red-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-mr-2 tw-mb-2 dark:tw-bg-red-600 dark:hover:tw-bg-red-700 dark:focus:tw-ring-red-900"
                to="/admin/events">
              Back to All Events
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="tw-grid tw-grid-cols-3 tw-gap-1 tw-mt-3 tw-p-2">
        <div v-for="(event , i) in eventDetails">
          <div
              class=" tw-block tw-max-w-sm tw-p-6 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow hover:tw-bg-gray-100 dark:tw-bg-gray-800 dark:tw-border-gray-700 dark:hover:tw-bg-gray-700"
          >
            <h5 class="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-gray-900 dark:tw-text-white">
              {{ event.label }}
            </h5>
            <p class="tw-font-normal tw-text-gray-700 dark:tw-text-gray-400">{{ event.value }}</p>
          </div>
        </div>
      </div>
      <div class="tw-p-4">
        <h1 class="tw-text-black dark:tw-text-white  tw-text-2xl tw-font-sans tw-antialiased">Schedules</h1>
        <div class="tw-grid tw-grid-cols-3 ">
          <div v-for="(schedule, i) in eventsStore.event.schedules" :key="i"
               class="tw-mt-2 tw-max-w-sm tw-p-6 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow dark:tw-bg-gray-800 dark:tw-border-gray-700">
            <div class="">
              <p class="tw-mb-2  tw-font-bold tw-tracking-tight tw-text-gray-900 dark:tw-text-white">
                <span class="tw-text-xl">START TIME: </span> {{
                  formatDate(schedule.startTime)
                }}
              </p>
              <p class="tw-mb-2  tw-font-bold tw-tracking-tight tw-text-gray-900 dark:tw-text-white">
                <span class="tw-text-xl">END TIME: </span>{{ formatDate(schedule.endTime) }}
              </p>
            </div>
            <p class="tw-mb-3 tw-font-normal tw-text-gray-700 dark:tw-text-gray-400">{{ schedule.description }}</p>

          </div>

        </div>
      </div>


    </main>
  </div>
</template>

<style scoped></style>

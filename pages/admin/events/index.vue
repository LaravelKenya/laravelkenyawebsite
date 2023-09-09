<script lang="ts" setup>
import {ChevronRightIcon, EyeIcon, HomeIcon, PencilSquareIcon, TrashIcon} from "@heroicons/vue/20/solid";
import {Event as Events} from "~/types/types"
import {useNavigationStore} from "~/stores/useNavigationStore";

definePageMeta({
  layout: "admin",
  middleware: "auth"
})

const events = ref<Events []>([])
const loading = ref<boolean>(false)
const modal = ref<boolean>(false)
const fetchEvents = async () => {
  loading.value = true
  const {data, pending} = await useApiFetch("/api/events")
  events.value = data.value?.data as Events[]
  loading.value = pending.value
}
fetchEvents()
const navigationStore = useNavigationStore()
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

              </ol>
            </nav>
            <h1 class="tw-text-xl tw-font-semibold tw-text-gray-900 sm:tw-text-2xl dark:tw-text-white">All
              Events</h1>
          </div>
        </div>
      </div>
      <div class="tw-flex tw-flex-col">
        <div class="tw-overflow-x-auto">
          <div class="tw-inline-block tw-min-w-full tw-align-middle">
            <div class="tw-overflow-hidden tw-shadow">
              <table class="tw-min-w-full tw-divide-y tw-divide-gray-200 tw-table-fixed dark:tw-divide-gray-600">
                <thead class="tw-bg-gray-100 dark:tw-bg-gray-700">
                <tr>
                  <th class="tw-p-4" scope="col">
                    <div class="tw-flex tw-items-center">
                      <input id="checkbox-all" aria-describedby="checkbox-1"
                             class="tw-w-4 tw-h-4 tw-border-gray-300 tw-rounded tw-bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:tw-ring-offset-gray-800 dark:tw-bg-gray-700 dark:tw-border-gray-600"
                             type="checkbox">
                      <label class="tw-sr-only" for="checkbox-all">checkbox</label>
                    </div>
                  </th>
                  <th class="tw-p-4 tw-text-xs tw-font-medium tw-text-left tw-text-gray-500 tw-uppercase dark:tw-text-gray-400"
                      scope="col">
                    Name
                  </th>
                  <th class="tw-p-4 tw-text-xs tw-font-medium tw-text-left tw-text-gray-500 tw-uppercase dark:tw-text-gray-400"
                      scope="col">
                    Date
                  </th>
                  <th class="tw-p-4 tw-text-xs tw-font-medium tw-text-left tw-text-gray-500 tw-uppercase dark:tw-text-gray-400"
                      scope="col">
                    Location
                  </th>
                  <th class="tw-p-4 tw-text-xs tw-font-medium tw-text-left tw-text-gray-500 tw-uppercase dark:tw-text-gray-400"
                      scope="col">
                    Schedules
                  </th>

                  <th class="tw-p-4 tw-text-xs tw-font-medium tw-text-left tw-text-gray-500 tw-uppercase dark:tw-text-gray-400"
                      scope="col">
                    Actions
                  </th>
                </tr>
                </thead>
                <Loader v-if="loading"/>
                <tbody class="tw-bg-white tw-divide-y tw-divide-gray-200 dark:tw-bg-gray-800 dark:tw-divide-gray-700">

                <tr v-for="(event, i) in events" :key="i" class="hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700">
                  <td class="tw-w-4 tw-p-4">
                    <div class="tw-flex tw-items-center">
                      <input id="checkbox-194556" aria-describedby="checkbox-1"
                             class="tw-w-4 tw-h-4 tw-border-gray-300 tw-rounded tw-bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:tw-ring-offset-gray-800 dark:tw-bg-gray-700 dark:tw-border-gray-600"
                             type="checkbox">
                      <label class="tw-sr-only" for="checkbox-194556">checkbox</label>
                    </div>
                  </td>
                  <td class="tw-p-4 tw-text-sm tw-font-normal tw-text-gray-500 tw-whitespace-nowrap dark:tw-text-gray-400">
                    <div class="tw-text-base tw-font-semibold tw-text-gray-900 dark:tw-text-white">
                      {{ event.name }}
                    </div>
                  </td>
                  <td class="tw-p-4 tw-text-base tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    {{ event.date }}
                  </td>
                  <td class="tw-p-4 tw-text-base tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    {{ event.location }}
                  </td>
                  <td class="tw-p-4 tw-text-base tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    {{ event.schedules?.length }}
                  </td>

                  <td class="tw-p-4 tw-space-x-2 tw-whitespace-nowrap">
                    <button
                        class="tw-inline-flex tw-items-center tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-center tw-text-white tw-rounded-lg tw-bg-green-700 hover:bg-green-800 focus:tw-ring-4 focus:tw-ring-green-300 dark:tw-bg-green-600 dark:hover:tw-bg-green-700 dark:focus:tw-ring-green-800"
                        type="button"
                        @click.prevent="navigationStore.addScheduleModal(true)">
                      <PencilSquareIcon class="tw-w-4 tw-h-4 tw-mr-2"/>
                      Add Schedule
                    </button>
                    <button
                        class="tw-inline-flex tw-items-center tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-center tw-text-white tw-rounded-lg tw-bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 dark:focus:ring-primary-800"
                        type="button">
                      <PencilSquareIcon class="tw-w-4 tw-h-4 tw-mr-2"/>
                      Update
                    </button>
                    <button
                        class="tw-inline-flex tw-items-center tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-center tw-text-white tw-rounded-lg tw-bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 dark:focus:ring-primary-800"
                        type="button">
                      <EyeIcon class="tw-w-4 tw-h-4 tw-mr-2"/>
                      View
                    </button>
                    <button
                        class="tw-inline-flex tw-items-center tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-center tw-text-white tw-rounded-lg tw-bg-red-700 hover:bg-red-800 focus:tw-ring-4 focus:tw-ring-red-300 dark:tw-bg-red-600 dark:hover:tw-bg-red-700 dark:focus:tw-ring-red-800"
                        type="button"
                        @click.prevent="navigationStore.deleteScheduleModal(true)">
                      <TrashIcon class="tw-w-4 tw-h-4 tw-mr-2"/>
                      Delete
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
          class="tw-sticky tw-bottom-0 tw-right-0 tw-items-center tw-w-full tw-p-4 tw-bg-white tw-border-t tw-border-gray-200 sm:tw-flex sm:tw-justify-between dark:tw-bg-gray-800 dark:tw-border-gray-700">
        <div class="tw-flex tw-items-center tw-mb-4 sm:tw-mb-0">
          <a class="tw-inline-flex tw-justify-center tw-p-1 tw-text-gray-500 tw-rounded tw-cursor-pointer hover:tw-text-gray-900 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700 dark:hover:tw-text-white"
             href="#">
            <svg class="tw-w-7 tw-h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    fill-rule="evenodd"></path>
            </svg>
          </a>
          <a class="tw-inline-flex tw-justify-center tw-p-1 tw-mr-2 tw-text-gray-500 tw-rounded tw-cursor-pointer hover:tw-text-gray-900 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700 dark:hover:tw-text-white"
             href="#">
            <svg class="tw-w-7 tw-h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    fill-rule="evenodd"></path>
            </svg>
          </a>
          <span class="tw-text-sm tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">Showing <span
              class="tw-font-semibold tw-text-gray-900 dark:tw-text-white">1-20</span> of <span
              class="tw-font-semibold tw-text-gray-900 dark:tw-text-white">2290</span></span>
        </div>
        <div class="tw-flex tw-items-center tw-space-x-3">
          <a class="tw-inline-flex tw-items-center tw-justify-center tw-flex-1 tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-center tw-text-white tw-rounded-lg bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
             href="#">
            <svg class="tw-w-5 tw-h-5 tw-mr-1 tw--ml-1" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    fill-rule="evenodd"></path>
            </svg>
            Previous
          </a>
          <a class="tw-inline-flex tw-items-center tw-justify-center tw-flex-1 tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-center tw-text-white tw-rounded-lg bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
             href="#">
            Next
            <svg class="tw-w-5 tw-h-5 tw-ml-1 tw--mr-1" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    fill-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>

      <AdminAddScheduleComponent/>
      <!-- Delete Product Drawer -->
      <AdminDeleteScheduleComponent/>


    </main>

  </div>
</template>

<style scoped></style>

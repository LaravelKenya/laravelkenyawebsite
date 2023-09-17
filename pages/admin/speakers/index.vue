<script lang="ts" setup>
import {ChevronRightIcon, EyeIcon, HomeIcon} from "@heroicons/vue/20/solid";
import {useUserSpeakerStore} from "~/stores/useUserSpeakerStore";

useHead({
  title: "Admin / Speakers"
})
definePageMeta({
  layout: "admin",
  middleware: "auth"
})
const speakersStore = useUserSpeakerStore()
speakersStore.getSpeakers()
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
                    >Users</p>
                  </div>
                </li>

              </ol>
            </nav>
            <h1 class="tw-text-xl tw-font-semibold tw-text-gray-900 sm:tw-text-2xl dark:tw-text-white">All
              Speakers</h1>
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
                    Phone Number
                  </th>
                  <th class="tw-p-4 tw-text-xs tw-font-medium tw-text-left tw-text-gray-500 tw-uppercase dark:tw-text-gray-400"
                      scope="col">
                    Bio
                  </th>
                  <th class="tw-p-4 tw-text-xs tw-font-medium tw-text-left tw-text-gray-500 tw-uppercase dark:tw-text-gray-400"
                      scope="col">
                    Github
                  </th>
                  <th class="tw-p-4 tw-text-xs tw-font-medium tw-text-left tw-text-gray-500 tw-uppercase dark:tw-text-gray-400"
                      scope="col">
                    Linked In
                  </th>
                  <th class="tw-p-4 tw-text-xs tw-font-medium tw-text-left tw-text-gray-500 tw-uppercase dark:tw-text-gray-400"
                      scope="col">
                    Twitter
                  </th>

                  <th class="tw-p-4 tw-text-xs tw-font-medium tw-text-left tw-text-gray-500 tw-uppercase dark:tw-text-gray-400"
                      scope="col">
                    Actions
                  </th>
                </tr>
                </thead>
                <Loader v-if="speakersStore.loading"/>
                <tbody class="tw-bg-white tw-divide-y tw-divide-gray-200 dark:tw-bg-gray-800 dark:tw-divide-gray-700">

                <tr v-for="(speaker, i) in speakersStore.speakers" :key="i"
                    class="hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700">
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
                      {{ speaker.user?.name }}
                    </div>
                  </td>
                  <td class="tw-p-4 tw-text-base tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    {{ speaker.user?.phoneNumber }}
                  </td>
                  <td class="tw-p-4 tw-text-base tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    {{ speaker.bio }}
                  </td>
                  <td class="tw-p-4 tw-text-base tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    {{ speaker.github }}
                  </td>
                  <td class="tw-p-4 tw-text-base tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    {{ speaker.linkedIn }}
                  </td>

                  <td class="tw-p-4 tw-text-base tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white">
                    {{ speaker.twitter }}
                  </td>

                  <td class="tw-p-4 tw-space-x-2 tw-whitespace-nowrap">
                    <button
                        class="tw-inline-flex tw-items-center tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-center tw-text-white tw-rounded-lg tw-bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 dark:focus:ring-primary-800"
                        type="button">
                      <EyeIcon class="tw-w-4 tw-h-4 tw-mr-2"/>
                      View
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

      <!-- Edit Product Drawer -->
      <div id="drawer-update-product-default"
           aria-hidden="true"
           aria-labelledby="drawer-label"
           class="tw-fixed tw-top-0 tw-right-0 tw-z-40 tw-w-full tw-h-screen tw-max-w-xs tw-p-4 tw-overflow-y-auto tw-transition-transform tw-translate-x-full tw-bg-white dark:tw-bg-gray-800"
           tabindex="-1">
        <h5 id="drawer-label"
            class="tw-inline-flex tw-items-center tw-mb-6 tw-text-sm tw-font-semibold tw-text-gray-500 tw-uppercase dark:tw-text-gray-400">
          Update Product</h5>
        <button aria-controls="drawer-update-product-default"
                class="tw-text-gray-400 tw-bg-transparent hover:tw-bg-gray-200 hover:tw-text-gray-900 tw-rounded-lg tw-text-sm tw-p-1.5 tw-absolute tw-top-2.5 tw-right-2.5 tw-inline-flex tw-items-center dark:hover:tw-bg-gray-600 dark:hover:tw-text-white"
                data-drawer-dismiss="drawer-update-product-default"
                type="button">
          <svg aria-hidden="true" class="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  fill-rule="evenodd"></path>
          </svg>
          <span class="tw-sr-only">Close menu</span>
        </button>
        <form action="#">
          <div class="tw-space-y-4">
            <div>
              <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white" for="name">Name</label>
              <input id="name"
                     class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:ring-primary-600 focus:border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     name="title"
                     placeholder="Type product name"
                     required="" type="text" value="Education Dashboard">
            </div>
            <div>
              <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                     for="category">Technology</label>
              <select id="category"
                      class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected="">Flowbite</option>
                <option value="RE">React</option>
                <option value="AN">Angular</option>
                <option value="VU">Vue JS</option>
              </select>
            </div>
            <div>
              <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white" for="price">Price</label>
              <input id="price"
                     class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:ring-primary-600 focus:border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     name="price"
                     placeholder="$149"
                     required="" type="number" value="2999">
            </div>
            <div>
              <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                     for="description">Description</label>
              <textarea id="description"
                        class="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter event description here"
                        rows="4">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</textarea>
            </div>
            <div>
              <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                     for="discount">Discount</label>
              <select id="discount"
                      class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected="">No</option>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
                <option value="40">40%</option>
                <option value="50">50%</option>
              </select>
            </div>
          </div>
          <div
              class="tw-bottom-0 tw-left-0 tw-flex tw-justify-center tw-w-full tw-pb-4 tw-mt-4 tw-space-x-4 sm:tw-absolute sm:tw-px-4 sm:tw-mt-0">
            <button
                class="tw-w-full tw-justify-center tw-text-white bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:tw-outline-none focus:ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="submit">
              Update
            </button>
            <button
                class="tw-w-full tw-justify-center tw-text-red-600 tw-inline-flex tw-items-center hover:tw-text-white tw-border tw-border-red-600 hover:tw-bg-red-600 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-red-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:tw-border-red-500 dark:tw-text-red-500 dark:hover:tw-text-white dark:hover:tw-bg-red-600 dark:focus:tw-ring-red-900"
                type="button">
              <svg aria-hidden="true" class="tw-w-5 tw-h-5 tw-mr-1 tw--ml-1" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      fill-rule="evenodd"></path>
              </svg>
              Delete
            </button>
          </div>
        </form>
      </div>


      <!-- Delete Product Drawer -->
      <div id="drawer-delete-product-default"
           aria-hidden="true"
           aria-labelledby="drawer-label"
           class="tw-fixed tw-top-0 tw-right-0 tw-z-40 tw-w-full tw-h-screen tw-max-w-xs tw-p-4 tw-overflow-y-auto tw-transition-transform tw-translate-x-full tw-bg-white dark:tw-bg-gray-800"
           tabindex="-1">
        <h5 id="drawer-label"
            class="tw-inline-flex tw-items-center tw-text-sm tw-font-semibold tw-text-gray-500 tw-uppercase dark:tw-text-gray-400">
          Delete
          item</h5>
        <button aria-controls="drawer-delete-product-default"
                class="tw-text-gray-400 tw-bg-transparent hover:tw-bg-gray-200 hover:tw-text-gray-900 tw-rounded-lg tw-text-sm tw-p-1.5 tw-absolute tw-top-2.5 tw-right-2.5 tw-inline-flex tw-items-center dark:hover:tw-bg-gray-600 dark:hover:tw-text-white"
                data-drawer-dismiss="drawer-delete-product-default"
                type="button">
          <svg aria-hidden="true" class="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  fill-rule="evenodd"></path>
          </svg>
          <span class="tw-sr-only">Close menu</span>
        </button>
        <svg class="tw-w-10 tw-h-10 tw-mt-8 tw-mb-4 tw-text-red-600" fill="none" stroke="currentColor"
             viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"></path>
        </svg>
        <h3 class="tw-mb-6 tw-text-lg tw-text-gray-500 dark:tw-text-gray-400">Are you sure you want to delete this
          product?</h3>
        <a class="tw-text-white tw-bg-red-600 hover:tw-bg-red-800 focus:tw-ring-4 focus:tw-ring-red-300 tw-font-medium tw-rounded-lg tw-text-sm tw-inline-flex tw-items-center tw-px-3 tw-py-2.5 tw-text-center tw-mr-2 dark:focus:tw-ring-red-900"
           href="#">
          Yes, I'm sure
        </a>
        <a class="tw-text-gray-900 tw-bg-white hover:tw-bg-gray-100 focus:tw-ring-4 focus:ring-primary-300 tw-border tw-border-gray-200 tw-font-medium tw-inline-flex tw-items-center tw-rounded-lg tw-text-sm tw-px-3 tw-py-2.5 tw-text-center dark:tw-bg-gray-800 dark:tw-text-gray-400 dark:tw-border-gray-600 dark:hover:tw-text-white dark:hover:tw-bg-gray-700 dark:focus:tw-ring-gray-700"
           data-modal-toggle="delete-product-modal"
           href="#">
          No, cancel
        </a>
      </div>


      <!-- Add Product Drawer -->
      <div id="drawer-create-product-default"
           aria-hidden="true"
           aria-labelledby="drawer-label"
           class="tw-fixed tw-top-0 tw-right-0 tw-z-40 tw-w-full tw-h-screen tw-max-w-xs tw-p-4 tw-overflow-y-auto tw-transition-transform tw-translate-x-full tw-bg-white dark:tw-bg-gray-800"
           tabindex="-1">
        <h5 id="drawer-label"
            class="tw-inline-flex tw-items-center tw-mb-6 tw-text-sm tw-font-semibold tw-text-gray-500 tw-uppercase dark:tw-text-gray-400">
          New
          Product</h5>
        <button aria-controls="drawer-create-product-default"
                class="tw-text-gray-400 tw-bg-transparent hover:tw-bg-gray-200 hover:tw-text-gray-900 tw-rounded-lg tw-text-sm tw-p-1.5 tw-absolute tw-top-2.5 tw-right-2.5 tw-inline-flex tw-items-center dark:hover:tw-bg-gray-600 dark:hover:tw-text-white"
                data-drawer-dismiss="drawer-create-product-default"
                type="button">
          <svg aria-hidden="true" class="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  fill-rule="evenodd"></path>
          </svg>
          <span class="tw-sr-only">Close menu</span>
        </button>
        <form action="#">
          <div class="tw-space-y-4">
            <div>
              <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white" for="name">Name</label>
              <input id="name"
                     class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:ring-primary-600 focus:border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     name="title"
                     placeholder="Type product name"
                     required="" type="text">
            </div>

            <div>
              <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white" for="price">Price</label>
              <input id="price"
                     class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:ring-primary-600 focus:border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     name="price"
                     placeholder="$2999"
                     required="" type="number">
            </div>
            <div>
              <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                     for="category-create">Technology</label>
              <select id="category-create"
                      class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected="">Select category</option>
                <option value="FL">Flowbite</option>
                <option value="RE">React</option>
                <option value="AN">Angular</option>
                <option value="VU">Vue</option>
              </select>
            </div>
            <div>
              <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                     for="description">Description</label>
              <textarea id="description"
                        class="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter event description here"
                        rows="4"></textarea>
            </div>
            <div>
              <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                     for="discount-create">Discount</label>
              <select id="discount-create"
                      class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected="">No</option>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
                <option value="40">40%</option>
                <option value="50">50%</option>
              </select>
            </div>
            <div
                class="tw-bottom-0 tw-left-0 tw-flex tw-justify-center tw-w-full tw-pb-4 tw-space-x-4 md:tw-px-4 md:tw-absolute">
              <button
                  class="tw-text-white tw-w-full tw-justify-center bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:tw-outline-none focus:ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="submit">
                Add product
              </button>
              <button aria-controls="drawer-create-product-default"
                      class="tw-inline-flex tw-w-full tw-justify-center tw-text-gray-500 tw-items-center tw-bg-white hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-outline-none focus:ring-primary-300 tw-rounded-lg tw-border tw-border-gray-200 tw-text-sm tw-font-medium tw-px-5 tw-py-2.5 hover:tw-text-gray-900 focus:tw-z-10 dark:tw-bg-gray-700 dark:tw-text-gray-300 dark:tw-border-gray-500 dark:hover:tw-text-white dark:hover:tw-bg-gray-600 dark:focus:tw-ring-gray-600"
                      data-drawer-dismiss="drawer-create-product-default"
                      type="button">
                <svg aria-hidden="true" class="tw-w-5 tw-h-5 tw--ml-1 sm:tw-mr-1" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg>
                Cancel
              </button>
            </div>
          </div>
        </form>

      </div>


    </main>

  </div>
</template>

<style scoped></style>

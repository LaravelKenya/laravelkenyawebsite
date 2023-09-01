<script lang="ts" setup>
import {useNavigationStore} from "~/stores/useNavigationStore";

const navigation = useNavigationStore()
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
          <div class="tw-hidden tw-mr-3 tw--mb-1 sm:tw-block">
            <a aria-label="Star themesberg/flowbite-admin-dashboard on GitHub" class="github-button"
               data-color-scheme="no-preference: dark; light: light; dark: light;" data-icon="octicon-star"
               data-show-count="true" data-size="large" href="https://github.com/themesberg/flowbite-admin-dashboard">Star</a>
          </div>

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

          <button
              class="tw-p-2 tw-text-gray-500 tw-rounded-lg hover:tw-text-gray-900 hover:tw-bg-gray-100 dark:tw-text-gray-400 dark:hover:tw-text-white dark:hover:tw-bg-gray-700"
              data-dropdown-toggle="notification-dropdown"
              type="button">
            <span class="tw-sr-only">View notifications</span>

            <svg class="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
            </svg>
          </button>

          <div
              id="notification-dropdown"
              class="tw-z-20 tw-z-50 tw-hidden tw-max-w-sm tw-my-4 tw-overflow-hidden tw-text-base tw-list-none tw-bg-white tw-divide-y tw-divide-gray-100 tw-rounded tw-shadow-lg dark:tw-divide-gray-600 dark:tw-bg-gray-700">
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

          <button
              class="tw-hidden tw-p-2 tw-text-gray-500 tw-rounded-lg sm:tw-flex hover:tw-text-gray-900 hover:tw-bg-gray-100 dark:tw-text-gray-400 dark:hover:tw-text-white dark:hover:tw-bg-gray-700"
              data-dropdown-toggle="apps-dropdown"
              type="button">
            <span class="tw-sr-only">View notifications</span>

            <svg class="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
          </button>

          <div
              id="apps-dropdown"
              class="tw-z-20 tw-z-50 tw-hidden tw-max-w-sm tw-my-4 tw-overflow-hidden tw-text-base tw-list-none tw-bg-white tw-divide-y tw-divide-gray-100 tw-rounded tw-shadow-lg dark:tw-bg-gray-700 dark:tw-divide-gray-600">
            <div
                class="tw-block tw-px-4 tw-py-2 tw-text-base tw-font-medium tw-text-center tw-text-gray-700 tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400">
              Apps
            </div>
            <div class="tw-grid tw-grid-cols-3 tw-gap-4 tw-p-4">
              <a class="tw-block tw-p-4 tw-text-center tw-rounded-lg hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600"
                 href="#">
                <svg class="tw-mx-auto tw-mb-1 tw-text-gray-500 tw-w-7 tw-h-7 dark:tw-text-gray-400" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        fill-rule="evenodd"></path>
                </svg>
                <div class="tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Sales</div>
              </a>
              <a class="tw-block tw-p-4 tw-text-center tw-rounded-lg hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600"
                 href="#">
                <svg class="tw-mx-auto tw-mb-1 tw-text-gray-500 tw-w-7 tw-h-7 dark:tw-text-gray-400" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
                <div class="tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Users</div>
              </a>
              <a class="tw-block tw-p-4 tw-text-center tw-rounded-lg hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600"
                 href="#">
                <svg class="tw-mx-auto tw-mb-1 tw-text-gray-500 tw-w-7 tw-h-7 dark:tw-text-gray-400" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd"
                        d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                        fill-rule="evenodd"></path>
                </svg>
                <div class="tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Inbox</div>
              </a>
              <a class="tw-block tw-p-4 tw-text-center tw-rounded-lg hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600"
                 href="#">
                <svg class="tw-mx-auto tw-mb-1 tw-text-gray-500 tw-w-7 tw-h-7 dark:tw-text-gray-400" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        fill-rule="evenodd"></path>
                </svg>
                <div class="tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Profile</div>
              </a>
              <a class="tw-block tw-p-4 tw-text-center tw-rounded-lg hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600"
                 href="#">
                <svg class="tw-mx-auto tw-mb-1 tw-text-gray-500 tw-w-7 tw-h-7 dark:tw-text-gray-400" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        fill-rule="evenodd"></path>
                </svg>
                <div class="tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Settings</div>
              </a>
              <a class="tw-block tw-p-4 tw-text-center tw-rounded-lg hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600"
                 href="#">
                <svg class="tw-mx-auto tw-mb-1 tw-text-gray-500 tw-w-7 tw-h-7 dark:tw-text-gray-400" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                  <path clip-rule="evenodd"
                        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                        fill-rule="evenodd"></path>
                </svg>
                <div class="tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Products</div>
              </a>
              <a class="tw-block tw-p-4 tw-text-center tw-rounded-lg hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600"
                 href="#">
                <svg class="tw-mx-auto tw-mb-1 tw-text-gray-500 tw-w-7 tw-h-7 dark:tw-text-gray-400" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path clip-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        fill-rule="evenodd"></path>
                </svg>
                <div class="tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Pricing</div>
              </a>
              <a class="tw-block tw-p-4 tw-text-center tw-rounded-lg hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600"
                 href="#">
                <svg class="tw-mx-auto tw-mb-1 tw-text-gray-500 tw-w-7 tw-h-7 dark:tw-text-gray-400" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd"
                        d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                        fill-rule="evenodd"></path>
                </svg>
                <div class="tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Billing</div>
              </a>
              <a class="tw-block tw-p-4 tw-text-center tw-rounded-lg hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600"
                 href="#">
                <svg class="tw-mx-auto tw-mb-1 tw-text-gray-500 tw-w-7 tw-h-7 dark:tw-text-gray-400" fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"></path>
                </svg>
                <div class="tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Logout</div>
              </a>
            </div>
          </div>
          <button id="theme-toggle"
                  class="tw-text-gray-500 dark:tw-text-gray-400 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700 focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-gray-200 dark:focus:tw-ring-gray-700 tw-rounded-lg tw-text-sm tw-p-2.5"
                  data-tooltip-target="tooltip-toggle"
                  type="button">
            <svg id="theme-toggle-dark-icon" class="tw-hidden tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg id="theme-toggle-light-icon" class="tw-hidden tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  clip-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"></path>
            </svg>
          </button>
          <div id="tooltip-toggle"
               class="tw-absolute tw-z-10 tw-invisible tw-inline-block tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-transition-opacity tw-duration-300 tw-bg-gray-900 tw-rounded-lg tw-shadow-sm tw-opacity-0 tooltip"
               role="tooltip">
            Toggle dark mode
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>

          <div class="tw-flex tw-items-center tw-ml-3">
            <div>
              <button id="user-menu-button-2"
                      aria-expanded="false"
                      class="tw-flex tw-text-sm tw-bg-gray-800 tw-rounded-full focus:tw-ring-4 focus:tw-ring-gray-300 dark:focus:tw-ring-gray-600"
                      data-dropdown-toggle="dropdown-2" type="button">
                <span class="tw-sr-only">Open user menu</span>
                <img alt="user photo" class="tw-w-8 tw-h-8 tw-rounded-full"
                     src="https://flowbite.com/docs/images/people/profile-picture-5.jpg">
              </button>
            </div>

            <div
                id="dropdown-2"
                class="tw-z-50 tw-hidden tw-my-4 tw-text-base tw-list-none tw-bg-white tw-divide-y tw-divide-gray-100 tw-rounded tw-shadow dark:tw-bg-gray-700 dark:tw-divide-gray-600">
              <div class="tw-px-4 tw-py-3" role="none">
                <p class="tw-text-sm tw-text-gray-900 dark:tw-text-white" role="none">
                  Neil Sims
                </p>
                <p class="tw-text-sm tw-font-medium tw-text-gray-900 tw-truncate dark:tw-text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="tw-py-1" role="none">
                <li>
                  <a class="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100 dark:tw-text-gray-300 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white"
                     href="#"
                     role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a class="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100 dark:tw-text-gray-300 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white"
                     href="#"
                     role="menuitem">Settings</a>
                </li>
                <li>
                  <a class="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100 dark:tw-text-gray-300 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white"
                     href="#"
                     role="menuitem">Earnings</a>
                </li>
                <li>
                  <a class="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100 dark:tw-text-gray-300 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white"
                     href="#"
                     role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>

<script lang="ts" setup>
definePageMeta({
  layout: "admin",
  middleware: "auth"
})
</script>

<template>
  <div id="main-content"
       class="tw-relative tw-w-full tw-h-full tw-overflow-y-auto tw-bg-gray-50 lg:tw-ml-64 dark:tw-bg-gray-900">
    <main>

      <div class="tw-grid tw-grid-cols-1 tw-px-4 tw-pt-6 xl:tw-grid-cols-3 xl:tw-gap-4 dark:tw-bg-gray-900">
        <div class="tw-mb-4 tw-col-span-full xl:tw-mb-2">
          <nav aria-label="Breadcrumb" class="tw-flex tw-mb-5">
            <ol class="tw-inline-flex tw-items-center tw-space-x-1 tw-text-sm tw-font-medium md:tw-space-x-2">
              <li class="tw-inline-flex tw-items-center">
                <a class="tw-inline-flex tw-items-center tw-text-gray-700 hover:text-primary-600 dark:tw-text-gray-300 dark:hover:tw-text-white"
                   href="#">
                  <svg class="tw-w-5 tw-h-5 tw-mr-2.5" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div class="tw-flex tw-items-center">
                  <svg class="tw-w-6 tw-h-6 tw-text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          fill-rule="evenodd"></path>
                  </svg>
                  <a class="tw-ml-1 tw-text-gray-700 hover:text-primary-600 md:tw-ml-2 dark:tw-text-gray-300 dark:hover:tw-text-white"
                     href="#">Users</a>
                </div>
              </li>
              <li>
                <div class="tw-flex tw-items-center">
                  <svg class="tw-w-6 tw-h-6 tw-text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          fill-rule="evenodd"></path>
                  </svg>
                  <span aria-current="page"
                        class="tw-ml-1 tw-text-gray-400 md:tw-ml-2 dark:tw-text-gray-500">Settings</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 class="tw-text-xl tw-font-semibold tw-text-gray-900 sm:tw-text-2xl dark:tw-text-white">User settings</h1>
        </div>
        <!-- Right Content -->
        <div class="tw-col-span-full xl:tw-col-auto">
          <div
              class="tw-p-4 tw-mb-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm 2xl:tw-col-span-2 dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-800">
            <div
                class="tw-items-center sm:tw-flex xl:tw-block 2xl:tw-flex sm:tw-space-x-4 xl:tw-space-x-0 2xl:tw-space-x-4">
              <img alt="Jese picture"
                   class="tw-mb-4 tw-rounded-lg tw-w-28 tw-h-28 sm:tw-mb-0 xl:tw-mb-4 2xl:tw-mb-0"
                   src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png">
              <div>
                <h3 class="tw-mb-1 tw-text-xl tw-font-bold tw-text-gray-900 dark:tw-text-white">Profile picture</h3>
                <div class="tw-mb-4 tw-text-sm tw-text-gray-500 dark:tw-text-gray-400">
                  JPG, GIF or PNG. Max size of 800K
                </div>
                <div class="tw-flex tw-items-center tw-space-x-4">
                  <button
                      class="tw-inline-flex tw-items-center tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-center tw-text-white tw-rounded-lg bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      type="button">
                    <svg class="tw-w-4 tw-h-4 tw-mr-2 tw--ml-1" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                      <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                    </svg>
                    Upload picture
                  </button>
                  <button
                      class="tw-py-2 tw-px-3 tw-text-sm tw-font-medium tw-text-gray-900 focus:tw-outline-none tw-bg-white tw-rounded-lg tw-border tw-border-gray-200 hover:tw-bg-gray-100 hover:tw-text-blue-700 focus:tw-z-10 focus:tw-ring-4 focus:tw-ring-gray-200 dark:focus:tw-ring-gray-700 dark:tw-bg-gray-800 dark:tw-text-gray-400 dark:tw-border-gray-600 dark:hover:tw-text-white dark:hover:tw-bg-gray-700"
                      type="button">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
              class="tw-p-4 tw-mb-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm 2xl:tw-col-span-2 dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-800">
            <h3 class="tw-mb-4 tw-text-xl tw-font-semibold dark:tw-text-white">Language & Time</h3>
            <div class="tw-mb-4">
              <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                     for="settings-language">Select
                language</label>
              <select id="settings-language"
                      class="tw-bg-gray-50 tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      name="countries">
                <option>English (US)</option>
                <option>Italiano</option>
                <option>Français (France)</option>
                <option>正體字</option>
                <option>Español (España)</option>
                <option>Deutsch</option>
                <option>Português (Brasil)</option>
              </select>
            </div>
            <div class="tw-mb-6">
              <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                     for="settings-timezone">Time
                Zone</label>
              <select id="settings-timezone"
                      class="tw-bg-gray-50 tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      name="countries">
                <option>GMT+0 Greenwich Mean Time (GMT)</option>
                <option>GMT+1 Central European Time (CET)</option>
                <option>GMT+2 Eastern European Time (EET)</option>
                <option>GMT+3 Moscow Time (MSK)</option>
                <option>GMT+5 Pakistan Standard Time (PKT)</option>
                <option>GMT+8 China Standard Time (CST)</option>
                <option>GMT+10 Eastern Australia Standard Time (AEST)</option>
              </select>
            </div>
            <div>
              <button
                  class="tw-text-white bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Save all
              </button>
            </div>
          </div>
          <div
              class="tw-p-4 tw-mb-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm 2xl:tw-col-span-2 dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-800">
            <div class="tw-flow-root">
              <h3 class="tw-text-xl tw-font-semibold dark:tw-text-white">Social accounts</h3>
              <ul class="tw-divide-y tw-divide-gray-200 dark:tw-divide-gray-700">
                <li class="tw-py-4">
                  <div class="tw-flex tw-items-center tw-space-x-4">
                    <div class="tw-flex-shrink-0">
                      <svg aria-hidden="true" class="tw-w-5 tw-h-5 dark:tw-text-white" data-icon="facebook-f"
                           data-prefix="fab"
                           focusable="false" role="img" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            fill="currentColor"></path>
                      </svg>
                    </div>
                    <div class="tw-flex-1 tw-min-w-0">
                                <span
                                    class="tw-block tw-text-base tw-font-semibold tw-text-gray-900 tw-truncate dark:tw-text-white">
                                    Facebook account
                                </span>
                      <a class="tw-block tw-text-sm tw-font-normal tw-truncate text-primary-700 hover:tw-underline dark:text-primary-500"
                         href="#">
                        www.facebook.com/themesberg
                      </a>
                    </div>
                    <div class="tw-inline-flex tw-items-center">
                      <a class="tw-px-3 tw-py-2 tw-mb-3 tw-mr-3 tw-text-sm tw-font-medium tw-text-center tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 tw-rounded-lg hover:tw-bg-gray-100 focus:tw-ring-4 focus:ring-primary-300 dark:tw-bg-gray-800 dark:tw-text-gray-400 dark:tw-border-gray-600 dark:hover:tw-text-white dark:hover:tw-bg-gray-700"
                         href="#">Disconnect</a>
                    </div>
                  </div>
                </li>
                <li class="tw-py-4">
                  <div class="tw-flex tw-items-center tw-space-x-4">
                    <div class="tw-flex-shrink-0">
                      <svg aria-hidden="true" class="tw-w-5 tw-h-5 dark:tw-text-white" data-icon="twitter"
                           data-prefix="fab"
                           focusable="false" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                            fill="currentColor"></path>
                      </svg>
                    </div>
                    <div class="tw-flex-1 tw-min-w-0">
                                <span
                                    class="tw-block tw-text-base tw-font-semibold tw-text-gray-900 tw-truncate dark:tw-text-white">
                                    Twitter account
                                </span>
                      <a class="tw-block tw-text-sm tw-font-normal tw-truncate text-primary-700 hover:tw-underline dark:text-primary-500"
                         href="#">
                        www.twitter.com/themesberg
                      </a>
                    </div>
                    <div class="tw-inline-flex tw-items-center">
                      <a class="tw-px-3 tw-py-2 tw-mb-3 tw-mr-3 tw-text-sm tw-font-medium tw-text-center tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 tw-rounded-lg hover:tw-bg-gray-100 focus:tw-ring-4 focus:ring-primary-300 dark:tw-bg-gray-800 dark:tw-text-gray-400 dark:tw-border-gray-600 dark:hover:tw-text-white dark:hover:tw-bg-gray-700"
                         href="#">Disconnect</a>
                    </div>
                  </div>
                </li>
                <li class="tw-py-4">
                  <div class="tw-flex tw-items-center tw-space-x-4">
                    <div class="tw-flex-shrink-0">
                      <svg aria-hidden="true" class="tw-w-5 tw-h-5 dark:tw-text-white" data-icon="github"
                           data-prefix="fab"
                           focusable="false" role="img" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                            fill="currentColor"></path>
                      </svg>
                    </div>
                    <div class="tw-flex-1 tw-min-w-0">
                                <span
                                    class="tw-block tw-text-base tw-font-semibold tw-text-gray-900 tw-truncate dark:tw-text-white">
                                    Github account
                                </span>
                      <span
                          class="tw-block tw-text-sm tw-font-normal tw-text-gray-500 tw-truncate dark:tw-text-gray-400">
                                    Not connected
                                </span>
                    </div>
                    <div class="tw-inline-flex tw-items-center">
                      <a class="tw-px-3 tw-py-2 tw-mb-3 tw-mr-3 tw-text-sm tw-font-medium tw-text-center tw-text-white tw-rounded-lg bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                         href="#">Connect</a>
                    </div>
                  </div>
                </li>
                <li class="tw-pt-4 tw-pb-6">
                  <div class="tw-flex tw-items-center tw-space-x-4">
                    <div class="tw-flex-shrink-0">
                      <svg aria-hidden="true" class="tw-w-5 tw-h-5 dark:tw-text-white" data-icon="dribbble"
                           data-prefix="fab"
                           focusable="false" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"
                            fill="currentColor"></path>
                      </svg>
                    </div>
                    <div class="tw-flex-1 tw-min-w-0">
                                <span
                                    class="tw-block tw-text-base tw-font-semibold tw-text-gray-900 tw-truncate dark:tw-text-white">
                                    Dribbble account
                                </span>
                      <span
                          class="tw-block tw-text-sm tw-font-normal tw-text-gray-500 tw-truncate dark:tw-text-gray-400">
                                    Not connected
                                </span>
                    </div>
                    <div class="tw-inline-flex tw-items-center">
                      <a class="tw-px-3 tw-py-2 tw-mb-3 tw-mr-3 tw-text-sm tw-font-medium tw-text-center tw-text-white tw-rounded-lg bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                         href="#">Connect</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div>
                <button
                    class="tw-text-white bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Save all
                </button>
              </div>
            </div>
          </div>
          <div
              class="tw-p-4 tw-mb-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm 2xl:tw-col-span-2 dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-800">
            <div class="tw-flow-root">
              <h3 class="tw-text-xl tw-font-semibold dark:tw-text-white">Other accounts</h3>
              <ul class="tw-mb-6 tw-divide-y tw-divide-gray-200 dark:tw-divide-gray-700">
                <li class="tw-py-4">
                  <div class="tw-flex tw-justify-between xl:tw-block 2xl:tw-flex align-center 2xl:tw-space-x-4">
                    <div class="tw-flex tw-space-x-4 xl:tw-mb-4 2xl:tw-mb-0">
                      <div>
                        <img alt="Bonnie image"
                             class="tw-w-6 tw-h-6 tw-rounded-full"
                             src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png">
                      </div>
                      <div class="tw-flex-1 tw-min-w-0">
                        <p class="tw-text-base tw-font-semibold tw-text-gray-900 tw-leading-none tw-truncate tw-mb-0.5 dark:tw-text-white">
                          Bonnie Green
                        </p>
                        <p class="tw-mb-1 tw-text-sm tw-font-normal tw-truncate text-primary-700 dark:text-primary-500">
                          New York, USA
                        </p>
                        <p class="tw-text-xs tw-font-medium tw-text-gray-500 dark:tw-text-gray-400">
                          Last seen: 1 min ago
                        </p>
                      </div>
                    </div>
                    <div class="tw-inline-flex tw-items-center tw-w-auto xl:tw-w-full 2xl:tw-w-auto">
                      <a class="tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-center tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 tw-rounded-lg hover:tw-bg-gray-100 focus:tw-ring-4 focus:ring-primary-300 dark:tw-bg-gray-800 dark:tw-text-gray-400 dark:tw-border-gray-600 dark:hover:tw-text-white dark:hover:tw-bg-gray-700"
                         href="#">Disconnect</a>
                    </div>
                  </div>
                </li>
                <li class="tw-py-4">
                  <div class="tw-flex tw-justify-between xl:tw-block 2xl:tw-flex align-center 2xl:tw-space-x-4">
                    <div class="tw-flex tw-space-x-4 xl:tw-mb-4 2xl:tw-mb-0">
                      <div>
                        <img alt="Jese image"
                             class="tw-w-6 tw-h-6 tw-rounded-full"
                             src="https://flowbite-admin-dashboard.vercel.app/images/users/jese-leos.png">
                      </div>
                      <div class="tw-flex-1 tw-min-w-0">
                        <p class="tw-text-base tw-font-semibold tw-text-gray-900 tw-leading-none tw-truncate tw-mb-0.5 dark:tw-text-white">
                          Jese Leos
                        </p>
                        <p class="tw-mb-1 tw-text-sm tw-font-normal tw-truncate text-primary-700 dark:text-primary-500">
                          California, USA
                        </p>
                        <p class="tw-text-xs tw-font-medium tw-text-gray-500 dark:tw-text-gray-400">
                          Last seen: 2 min ago
                        </p>
                      </div>
                    </div>
                    <div class="tw-inline-flex tw-items-center tw-w-auto xl:tw-w-full 2xl:tw-w-auto">
                      <a class="tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-center tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 tw-rounded-lg hover:tw-bg-gray-100 focus:tw-ring-4 focus:ring-primary-300 dark:tw-bg-gray-800 dark:tw-text-gray-400 dark:tw-border-gray-600 dark:hover:tw-text-white dark:hover:tw-bg-gray-700"
                         href="#">Disconnect</a>
                    </div>
                  </div>
                </li>
                <li class="tw-py-4">
                  <div class="tw-flex tw-justify-between xl:tw-block 2xl:tw-flex align-center 2xl:tw-space-x-4">
                    <div class="tw-flex tw-space-x-4 xl:tw-mb-4 2xl:tw-mb-0">
                      <div>
                        <img alt="Thomas image"
                             class="tw-w-6 tw-h-6 tw-rounded-full"
                             src="https://flowbite-admin-dashboard.vercel.app/images/users/thomas-lean.png">
                      </div>
                      <div class="tw-flex-1 tw-min-w-0">
                        <p class="tw-text-base tw-font-semibold tw-text-gray-900 tw-leading-none tw-truncate tw-mb-0.5 dark:tw-text-white">
                          Thomas Lean
                        </p>
                        <p class="tw-mb-1 tw-text-sm tw-font-normal tw-truncate text-primary-700 dark:text-primary-500">
                          Texas, USA
                        </p>
                        <p class="tw-text-xs tw-font-medium tw-text-gray-500 dark:tw-text-gray-400">
                          Last seen: 1 hour ago
                        </p>
                      </div>
                    </div>
                    <div class="tw-inline-flex tw-items-center tw-w-auto xl:tw-w-full 2xl:tw-w-auto">
                      <a class="tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-center tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 tw-rounded-lg hover:tw-bg-gray-100 focus:tw-ring-4 focus:ring-primary-300 dark:tw-bg-gray-800 dark:tw-text-gray-400 dark:tw-border-gray-600 dark:hover:tw-text-white dark:hover:tw-bg-gray-700"
                         href="#">Disconnect</a>
                    </div>
                  </div>
                </li>
                <li class="tw-pt-4">
                  <div class="tw-flex tw-justify-between xl:tw-block 2xl:tw-flex align-center 2xl:tw-space-x-4">
                    <div class="tw-flex tw-space-x-4 xl:tw-mb-4 2xl:tw-mb-0">
                      <div>
                        <img alt="Lana image"
                             class="tw-w-6 tw-h-6 tw-rounded-full"
                             src="https://flowbite-admin-dashboard.vercel.app/images/users/lana-byrd.png">
                      </div>
                      <div class="tw-flex-1 tw-min-w-0">
                        <p class="tw-text-base tw-font-semibold tw-text-gray-900 tw-leading-none tw-truncate tw-mb-0.5 dark:tw-text-white">
                          Lana Byrd
                        </p>
                        <p class="tw-mb-1 tw-text-sm tw-font-normal tw-truncate text-primary-700 dark:text-primary-500">
                          Texas, USA
                        </p>
                        <p class="tw-text-xs tw-font-medium tw-text-gray-500 dark:tw-text-gray-400">
                          Last seen: 1 hour ago
                        </p>
                      </div>
                    </div>
                    <div class="tw-inline-flex tw-items-center tw-w-auto xl:tw-w-full 2xl:tw-w-auto">
                      <a class="tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-center tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 tw-rounded-lg hover:tw-bg-gray-100 focus:tw-ring-4 focus:ring-primary-300 dark:tw-bg-gray-800 dark:tw-text-gray-400 dark:tw-border-gray-600 dark:hover:tw-text-white dark:hover:tw-bg-gray-700"
                         href="#">Disconnect</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div>
                <button
                    class="tw-text-white bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Save all
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="tw-col-span-2">
          <div
              class="tw-p-4 tw-mb-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm 2xl:tw-col-span-2 dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-800">
            <h3 class="tw-mb-4 tw-text-xl tw-font-semibold dark:tw-text-white">General information</h3>
            <form action="#">
              <div class="tw-grid tw-grid-cols-6 tw-gap-6">
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="first-name">First
                    Name</label>
                  <input id="first-name"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="first-name"
                         placeholder="Bonnie"
                         required type="text">
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="last-name">Last
                    Name</label>
                  <input id="last-name"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="last-name"
                         placeholder="Green"
                         required type="text">
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="country">Country</label>
                  <input id="country"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="country"
                         placeholder="United States"
                         required type="text">
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="city">City</label>
                  <input id="city"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="city"
                         placeholder="e.g. San Francisco"
                         required type="text">
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="address">Address</label>
                  <input id="address"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="address"
                         placeholder="e.g. California"
                         required type="text">
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="email">Email</label>
                  <input id="email"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="email"
                         placeholder="example@company.com"
                         required type="email">
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="phone-number">Phone
                    Number</label>
                  <input id="phone-number"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="phone-number"
                         placeholder="e.g. +(12)3456 789"
                         required type="number">
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="birthday">Birthday</label>
                  <input id="birthday"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="birthday"
                         placeholder="15/08/1990"
                         required type="number">
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="organization">Organization</label>
                  <input id="organization"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="organization"
                         placeholder="Company Name"
                         required type="text">
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="role">Role</label>
                  <input id="role"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="role"
                         placeholder="React Developer"
                         required type="text">
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="department">Department</label>
                  <input id="department"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="department"
                         placeholder="Development"
                         required type="text">
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="zip-code">Zip/postal
                    code</label>
                  <input id="zip-code"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="zip-code"
                         placeholder="123456"
                         required type="number">
                </div>
                <div class="tw-col-span-6 sm:col-full">
                  <button
                      class="tw-text-white bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      type="submit">Save all
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
              class="tw-p-4 tw-mb-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm 2xl:tw-col-span-2 dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-800">
            <h3 class="tw-mb-4 tw-text-xl tw-font-semibold dark:tw-text-white">Password information</h3>
            <form action="#">
              <div class="tw-grid tw-grid-cols-6 tw-gap-6">
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="current-password">Current
                    password</label>
                  <input id="current-password"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="current-password"
                         placeholder="••••••••"
                         required type="text">
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="password">New
                    password</label>
                  <input id="password"
                         class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
                         data-popover-placement="bottom"
                         data-popover-target="popover-password"
                         placeholder="••••••••"
                         required type="password">
                  <div id="popover-password"
                       class="tw-absolute tw-z-10 tw-invisible tw-inline-block tw-text-sm tw-font-light tw-text-gray-500 tw-transition-opacity tw-duration-300 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm tw-opacity-0 tw-w-72 dark:tw-bg-gray-800 dark:tw-border-gray-600 dark:tw-text-gray-400"
                       data-popover
                       role="tooltip">
                    <div class="tw-p-3 tw-space-y-2">
                      <h3 class="tw-font-semibold tw-text-gray-900 dark:tw-text-white">Must have at least 6
                        characters</h3>
                      <div class="tw-grid tw-grid-cols-4 tw-gap-2">
                        <div class="tw-h-1 tw-bg-orange-300 dark:tw-bg-orange-400"></div>
                        <div class="tw-h-1 tw-bg-orange-300 dark:tw-bg-orange-400"></div>
                        <div class="tw-h-1 tw-bg-gray-200 dark:tw-bg-gray-600"></div>
                        <div class="tw-h-1 tw-bg-gray-200 dark:tw-bg-gray-600"></div>
                      </div>
                      <p>It’s better to have:</p>
                      <ul>
                        <li class="tw-flex tw-items-center tw-mb-1">
                          <svg aria-hidden="true" class="tw-w-4 tw-h-4 tw-mr-2 tw-text-green-400 dark:tw-text-green-500"
                               fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  fill-rule="evenodd"></path>
                          </svg>
                          Upper & lower case letters
                        </li>
                        <li class="tw-flex tw-items-center tw-mb-1">
                          <svg aria-hidden="true" class="tw-w-4 tw-h-4 tw-mr-2 tw-text-gray-300 dark:tw-text-gray-400"
                               fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  fill-rule="evenodd"></path>
                          </svg>
                          A symbol (#$&)
                        </li>
                        <li class="tw-flex tw-items-center">
                          <svg aria-hidden="true" class="tw-w-4 tw-h-4 tw-mr-2 tw-text-gray-300 dark:tw-text-gray-400"
                               fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  fill-rule="evenodd"></path>
                          </svg>
                          A longer password (min. 12 chars.)
                        </li>
                      </ul>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                         for="confirm-password">Confirm
                    password</label>
                  <input id="confirm-password"
                         class="tw-shadow-sm tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:ring-primary-500 focus:border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         name="confirm-password"
                         placeholder="••••••••"
                         required type="text">
                </div>
                <div class="tw-col-span-6 sm:col-full">
                  <button
                      class="tw-text-white bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      type="submit">Save all
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
              class="tw-p-4 tw-mb-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm 2xl:tw-col-span-2 dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-800">
            <div class="tw-flow-root">
              <h3 class="tw-text-xl tw-font-semibold dark:tw-text-white">Sessions</h3>
              <ul class="tw-divide-y tw-divide-gray-200 dark:tw-divide-gray-700">
                <li class="tw-py-4">
                  <div class="tw-flex tw-items-center tw-space-x-4">
                    <div class="tw-flex-shrink-0">
                      <svg class="tw-w-6 tw-h-6 dark:tw-text-white" fill="none" stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"></path>
                      </svg>
                    </div>
                    <div class="tw-flex-1 tw-min-w-0">
                      <p class="tw-text-base tw-font-semibold tw-text-gray-900 tw-truncate dark:tw-text-white">
                        California 123.123.123.123
                      </p>
                      <p class="tw-text-sm tw-font-normal tw-text-gray-500 tw-truncate dark:tw-text-gray-400">
                        Chrome on macOS
                      </p>
                    </div>
                    <div class="tw-inline-flex tw-items-center">
                      <a class="tw-px-3 tw-py-2 tw-mb-3 tw-mr-3 tw-text-sm tw-font-medium tw-text-center tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 tw-rounded-lg hover:tw-bg-gray-100 focus:tw-ring-4 focus:ring-primary-300 dark:tw-bg-gray-800 dark:tw-text-gray-400 dark:tw-border-gray-600 dark:hover:tw-text-white dark:hover:tw-bg-gray-700"
                         href="#">Revoke</a>
                    </div>
                  </div>
                </li>
                <li class="tw-pt-4 tw-pb-6">
                  <div class="tw-flex tw-items-center tw-space-x-4">
                    <div class="tw-flex-shrink-0">
                      <svg class="tw-w-6 tw-h-6 dark:tw-text-white" fill="none" stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                              stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="2"></path>
                      </svg>
                    </div>
                    <div class="tw-flex-1 tw-min-w-0">
                      <p class="tw-text-base tw-font-semibold tw-text-gray-900 tw-truncate dark:tw-text-white">
                        Rome 24.456.355.98
                      </p>
                      <p class="tw-text-sm tw-font-normal tw-text-gray-500 tw-truncate dark:tw-text-gray-400">
                        Safari on iPhone
                      </p>
                    </div>
                    <div class="tw-inline-flex tw-items-center">
                      <a class="tw-px-3 tw-py-2 tw-mb-3 tw-mr-3 tw-text-sm tw-font-medium tw-text-center tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 tw-rounded-lg hover:tw-bg-gray-100 focus:tw-ring-4 focus:ring-primary-300 dark:tw-bg-gray-800 dark:tw-text-gray-400 dark:tw-border-gray-600 dark:hover:tw-text-white dark:hover:tw-bg-gray-700"
                         href="#">Revoke</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div>
                <button
                    class="tw-text-white bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="tw-grid tw-grid-cols-1 tw-px-4 xl:tw-grid-cols-2 xl:tw-gap-4">
        <div
            class="tw-p-4 tw-mb-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-800 xl:tw-mb-0">
          <div class="tw-flow-root">
            <h3 class="tw-text-xl tw-font-semibold dark:tw-text-white">Alerts & Notifications</h3>
            <p class="tw-text-sm tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">You can set up Themesberg to get
              notifications</p>
            <div class="tw-divide-y tw-divide-gray-200 dark:tw-divide-gray-700">
              <!-- Item 1 -->
              <div class="tw-flex tw-items-center tw-justify-between tw-py-4">
                <div class="tw-flex tw-flex-col tw-flex-grow">
                  <div class="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">Company News</div>
                  <div class="tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">Get Themesberg news,
                    announcements, and product updates
                  </div>
                </div>
                <label class="tw-relative tw-flex tw-items-center tw-cursor-pointer" for="company-news">
                  <input id="company-news" class="tw-sr-only" type="checkbox">
                  <span
                      class="tw-h-6 tw-bg-gray-200 tw-border tw-border-gray-200 tw-rounded-full tw-w-11 toggle-bg dark:tw-bg-gray-700 dark:tw-border-gray-600"></span>
                </label>
              </div>
              <!-- Item 2 -->
              <div class="tw-flex tw-items-center tw-justify-between tw-py-4">
                <div class="tw-flex tw-flex-col tw-flex-grow">
                  <div class="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">Account Activity</div>
                  <div class="tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">Get important
                    notifications about
                    you or activity you've missed
                  </div>
                </div>
                <label class="tw-relative tw-flex tw-items-center tw-cursor-pointer" for="account-activity">
                  <input id="account-activity" checked class="tw-sr-only" type="checkbox">
                  <span
                      class="tw-h-6 tw-bg-gray-200 tw-border tw-border-gray-200 tw-rounded-full tw-w-11 toggle-bg dark:tw-bg-gray-700 dark:tw-border-gray-600"></span>
                </label>
              </div>
              <!-- Item 3 -->
              <div class="tw-flex tw-items-center tw-justify-between tw-py-4">
                <div class="tw-flex tw-flex-col tw-flex-grow">
                  <div class="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">Meetups Near You</div>
                  <div class="tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">Get an email when a
                    Dribbble
                    Meetup is posted close to my location
                  </div>
                </div>
                <label class="tw-relative tw-flex tw-items-center tw-cursor-pointer" for="meetups">
                  <input id="meetups" checked class="tw-sr-only" type="checkbox">
                  <span
                      class="tw-h-6 tw-bg-gray-200 tw-border tw-border-gray-200 tw-rounded-full tw-w-11 toggle-bg dark:tw-bg-gray-700 dark:tw-border-gray-600"></span>
                </label>
              </div>
              <!-- Item 4 -->
              <div class="tw-flex tw-items-center tw-justify-between tw-pt-4">
                <div class="tw-flex tw-flex-col tw-flex-grow">
                  <div class="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">New Messages</div>
                  <div class="tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">Get Themsberg news,
                    announcements,
                    and product updates
                  </div>
                </div>
                <label class="tw-relative tw-flex tw-items-center tw-cursor-pointer" for="new-messages">
                  <input id="new-messages" class="tw-sr-only" type="checkbox">
                  <span
                      class="tw-h-6 tw-bg-gray-200 tw-border tw-border-gray-200 tw-rounded-full tw-w-11 toggle-bg dark:tw-bg-gray-700 dark:tw-border-gray-600"></span>
                </label>
              </div>
            </div>
            <div class="tw-mt-6">
              <button
                  class="tw-text-white bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Save all
              </button>
            </div>
          </div>
        </div>
        <div
            class="tw-p-4 tw-mb-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-800 xl:tw-mb-0">
          <div class="tw-flow-root">
            <h3 class="tw-text-xl tw-font-semibold dark:tw-text-white">Email Notifications</h3>
            <p class="tw-text-sm tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">You can set up Themesberg to get
              email
              notifications </p>
            <div class="tw-divide-y tw-divide-gray-200 dark:tw-divide-gray-700">
              <!-- Item 1 -->
              <div class="tw-flex tw-items-center tw-justify-between tw-py-4">
                <div class="tw-flex tw-flex-col tw-flex-grow">
                  <div class="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">Rating reminders</div>
                  <div class="tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">Send an email
                    reminding me to rate
                    an item a week after purchase
                  </div>
                </div>
                <label class="tw-relative tw-flex tw-items-center tw-cursor-pointer" for="rating-reminders">
                  <input id="rating-reminders" class="tw-sr-only" type="checkbox">
                  <span
                      class="tw-h-6 tw-bg-gray-200 tw-border tw-border-gray-200 tw-rounded-full tw-w-11 toggle-bg dark:tw-bg-gray-700 dark:tw-border-gray-600"></span>
                </label>
              </div>
              <!-- Item 2 -->
              <div class="tw-flex tw-items-center tw-justify-between tw-py-4">
                <div class="tw-flex tw-flex-col tw-flex-grow">
                  <div class="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">Item update
                    notifications
                  </div>
                  <div class="tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">Send user and product
                    notifications for you
                  </div>
                </div>
                <label class="tw-relative tw-flex tw-items-center tw-cursor-pointer" for="item-update">
                  <input id="item-update" checked class="tw-sr-only" type="checkbox">
                  <span
                      class="tw-h-6 tw-bg-gray-200 tw-border tw-border-gray-200 tw-rounded-full tw-w-11 toggle-bg dark:tw-bg-gray-700 dark:tw-border-gray-600"></span>
                </label>
              </div>
              <!-- Item 3 -->
              <div class="tw-flex tw-items-center tw-justify-between tw-py-4">
                <div class="tw-flex tw-flex-col tw-flex-grow">
                  <div class="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">Item comment
                    notifications
                  </div>
                  <div class="tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">Send me an email when
                    someone
                    comments on one of my items
                  </div>
                </div>
                <label class="tw-relative tw-flex tw-items-center tw-cursor-pointer" for="item-comment">
                  <input id="item-comment" checked class="tw-sr-only" type="checkbox">
                  <span
                      class="tw-h-6 tw-bg-gray-200 tw-border tw-border-gray-200 tw-rounded-full tw-w-11 toggle-bg dark:tw-bg-gray-700 dark:tw-border-gray-600"></span>
                </label>
              </div>
              <!-- Item 4 -->
              <div class="tw-flex tw-items-center tw-justify-between tw-pt-4">
                <div class="tw-flex tw-flex-col tw-flex-grow">
                  <div class="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">Buyer review
                    notifications
                  </div>
                  <div class="tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">Send me an email when
                    someone
                    leaves a review with their rating
                  </div>
                </div>
                <label class="tw-relative tw-flex tw-items-center tw-cursor-pointer" for="buyer-rev">
                  <input id="buyer-rev" class="tw-sr-only" type="checkbox">
                  <span
                      class="tw-h-6 tw-bg-gray-200 tw-border tw-border-gray-200 tw-rounded-full tw-w-11 toggle-bg dark:tw-bg-gray-700 dark:tw-border-gray-600"></span>
                </label>
              </div>
            </div>
            <div class="tw-mt-6">
              <button
                  class="tw-text-white bg-primary-700 hover:bg-primary-800 focus:tw-ring-4 focus:ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Save all
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer
        class="tw-p-4 tw-my-6 tw-mx-4 tw-bg-white tw-rounded-lg tw-shadow md:tw-flex md:tw-items-center md:tw-justify-between md:tw-p-6 xl:tw-p-8 dark:tw-bg-gray-800">
      <ul class="tw-flex tw-flex-wrap tw-items-center tw-mb-6 tw-space-y-1 md:tw-mb-0">
        <li><a
            class="tw-mr-4 tw-text-sm tw-font-normal tw-text-gray-500 hover:tw-underline md:tw-mr-6 dark:tw-text-gray-400"
            href="#">Terms
          and conditions</a></li>
        <li><a
            class="tw-mr-4 tw-text-sm tw-font-normal tw-text-gray-500 hover:tw-underline md:tw-mr-6 dark:tw-text-gray-400"
            href="#">Privacy
          Policy</a></li>
        <li><a
            class="tw-mr-4 tw-text-sm tw-font-normal tw-text-gray-500 hover:tw-underline md:tw-mr-6 dark:tw-text-gray-400"
            href="#">Licensing</a>
        </li>
        <li><a
            class="tw-mr-4 tw-text-sm tw-font-normal tw-text-gray-500 hover:tw-underline md:tw-mr-6 dark:tw-text-gray-400"
            href="#">Cookie
          Policy</a></li>
        <li><a class="tw-text-sm tw-font-normal tw-text-gray-500 hover:tw-underline dark:tw-text-gray-400" href="#">Contact</a>
        </li>
      </ul>
      <div class="tw-flex tw-space-x-6 sm:tw-justify-center">
        <a class="tw-text-gray-500 hover:tw-text-gray-900 dark:tw-text-gray-400 dark:hover:tw-text-white" href="#">
          <svg aria-hidden="true" class="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 24 24">
            <path clip-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fill-rule="evenodd"/>
          </svg>
        </a>
        <a class="tw-text-gray-500 hover:tw-text-gray-900 dark:tw-text-gray-400 dark:hover:tw-text-white" href="#">
          <svg aria-hidden="true" class="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 24 24">
            <path clip-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  fill-rule="evenodd"/>
          </svg>
        </a>
        <a class="tw-text-gray-500 hover:tw-text-gray-900 dark:tw-text-gray-400 dark:hover:tw-text-white" href="#">
          <svg aria-hidden="true" class="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
          </svg>
        </a>
        <a class="tw-text-gray-500 hover:tw-text-gray-900 dark:tw-text-gray-400 dark:hover:tw-text-white" href="#">
          <svg aria-hidden="true" class="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 24 24">
            <path clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  fill-rule="evenodd"/>
          </svg>
        </a>
        <a class="tw-text-gray-500 hover:tw-text-gray-900 dark:tw-text-gray-400 dark:hover:tw-text-white" href="#">
          <svg aria-hidden="true" class="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 24 24">
            <path clip-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  fill-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </footer>
    <p class="tw-my-10 tw-text-sm tw-text-center tw-text-gray-500">
      &copy; 2019-2023 <a class="hover:tw-underline" href="https://flowbite.com/" target="_blank">Flowbite.com</a>. All
      rights reserved.
    </p>

  </div>
</template>

<style scoped></style>

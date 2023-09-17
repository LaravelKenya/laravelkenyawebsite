<script lang="ts" setup>
import {useAuthStore} from "~/stores/useAuthStore";
import {ChangePassword, User} from "~/types/types";

definePageMeta({
  layout: "admin",
  middleware: "auth"
})

const auth = useAuthStore()
const user = ref<User>(auth.user)
const speaker = ref(auth.user.Speaker)

const password = ref<ChangePassword>({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

watch(auth.user, (value, oldValue, onCleanup) => {
  user.value = value
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
                     href="#">Settings</a>
                </div>
              </li>
            </ol>
          </nav>
          <h1 class="tw-text-xl tw-font-semibold tw-text-gray-900 sm:tw-text-2xl dark:tw-text-white">User settings</h1>
        </div>

        <div class="tw-col-span-full">
          <div
              class="tw-p-4 tw-mb-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm 2xl:tw-col-span-2 dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-800">
            <h3 class="tw-mb-4 tw-text-xl tw-font-semibold dark:tw-text-white">General information</h3>
            <form action="#">
              <div class="tw-grid tw-grid-cols-6 tw-gap-6">
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <FormInputComponent v-model="user.name" disabled label="Name" placeholder="Names"/>
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <FormInputComponent v-model="user.email" disabled label="Email Address" placeholder="Email Address"
                                      type="email"/>
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <FormInputComponent v-model="user.phoneNumber" label="Phone Number" placeholder="Phone Number"
                                      type="number"/>
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <FormInputComponent v-model="user.location" label="Location" placeholder="Location"/>
                </div>
              </div>
              <div v-if="user.Speaker" class="tw-grid tw-grid-cols-6 tw-gap-6 tw-mt-4">
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <FormInputComponent v-model="speaker.website" label="Website" placeholder="Website"/>
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <FormInputComponent v-model="speaker.github" label="Github" placeholder="Github Link"/>
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <FormInputComponent v-model="speaker.linkedIn" label="Linked In" placeholder="LinkedIn Link"/>
                </div>
                <div class="tw-col-span-6 sm:tw-col-span-3">
                  <FormInputComponent v-model="speaker.twitter" label="Twitter" placeholder="Twitter Link"/>
                </div>
                <div class="tw-col-span-full sm:tw-col-span-full">
                  <FormTextAreaComponent v-model="speaker.bio" :rows="3" label="Bio"/>
                </div>
              </div>
              <div class="tw-col-span-6 sm:tw-col-full tw-mt-4">
                <FormButtonComponent label="Save All" type="button" @click.prevent="auth.updateUser(user, speaker)"/>
              </div>
            </form>
          </div>
        </div>

      </div>
      <div class="tw-grid tw-grid-cols-1 tw-px-4 xl:tw-grid-cols-2 xl:tw-gap-4">
        <div
            class="tw-p-4 tw-mb-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm dark:tw-border-gray-700 sm:tw-p-6 dark:tw-bg-gray-800 xl:tw-mb-0">
          <div class="tw-flow-root">
            <h3 class="tw-mb-4 tw-text-xl tw-font-semibold dark:tw-text-white">Change Password information</h3>
            <form action="#">
              <div class="tw-grid tw-grid-cols-6 tw-gap-6">
                <div class="tw-col-span-full sm:tw-col-span-full">
                  <FormInputComponent v-model="password.currentPassword" label="Current Password"
                                      placeholder="Current Password"
                                      type="password"/>
                </div>
                <div class="tw-col-span-full sm:tw-col-span-full">
                  <FormInputComponent v-model="password.newPassword" label="New Password" placeholder="New Password"
                                      type="password"/>
                </div>
                <div class="tw-col-span-full sm:tw-col-span-full">
                  <FormInputComponent v-model="password.confirmPassword" label="Confirm Password"
                                      placeholder="Confirm Password"
                                      type="password"/>
                </div>
                <div class="tw-col-span-6 sm:col-full">
                  <FormButtonComponent label="Change Password" type="submit"
                                       @click.prevent="auth.changePassword(password)"/>
                </div>
              </div>
            </form>
          </div>
        </div>
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
      </div>
    </main>

  </div>
</template>

<style scoped></style>

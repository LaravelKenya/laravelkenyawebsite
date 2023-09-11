<script lang="ts" setup>

import {useUserSpeakerStore} from "~/stores/useUserSpeakerStore";
import {Speaker} from "~/types/types";

const {user} = defineProps<{
  isOpen: boolean,
  user: { name: string, email: string, userId: number }
}>()
const emit = defineEmits<{
  (e: 'closeModal'): void
}>()
const closeModal = () => {
  emit('closeModal')
}
const speakerStore = useUserSpeakerStore()

const speaker = ref<Speaker>({
  userId: 0,
  bio: "",
  website: "",
  github: "",
  twitter: "",
  linkedIn: "",
})


</script>

<template>

  <HeadlessTransitionRoot :show="isOpen" appear as="template">
    <HeadlessDialog as="div" class="tw-relative tw-z-10" @close="closeModal">
      <HeadlessTransitionChild
          as="template"
          enter="tw-duration-300 tw-ease-out"
          enter-from="tw-opacity-0"
          enter-to="tw-opacity-100"
          leave="tw-duration-200 tw-ease-in"
          leave-from="tw-opacity-100"
          leave-to="tw-opacity-0"
      >
        <div class="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-25"/>
      </HeadlessTransitionChild>

      <div class="tw-fixed tw-inset-0 tw-overflow-y-auto">
        <div
            class="tw-flex tw-min-h-full tw-items-center tw-justify-center tw-p-4 tw-text-center"
        >
          <HeadlessTransitionChild
              as="template"
              enter="tw-duration-300 tw-ease-out"
              enter-from="tw-opacity-0 tw-scale-95"
              enter-to="tw-opacity-100 tw-scale-100"
              leave="tw-duration-200 tw-ease-in"
              leave-from="tw-opacity-100 tw-scale-100"
              leave-to="tw-opacity-0 tw-scale-95"
          >
            <HeadlessDialogPanel
                class="tw-w-full tw-max-w-md tw-transform tw-overflow-hidden tw-rounded-2xl tw-bg-white dark:tw-bg-gray-900 dark:tw-text-white tw-p-6 tw-text-left tw-align-middle tw-shadow-xl tw-transition-all"
            >
              <HeadlessDialogTitle
                  as="div"
                  class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"
              >
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Make User A Speaker
                </h3>
              </HeadlessDialogTitle>


              <div class="tw-mt-2">

                <form action="#">
                  <div class="tw-grid tw-gap-4 tw-mb-4 sm:tw-grid-cols-2">
                    <FormInputComponent v-model="user.name" :disabled="true" label="Name" type="text"/>
                    <FormInputComponent v-model="user.email" :disabled="true" label="Email Address"
                                        type="email"/>
                    <FormInputComponent v-model="speaker.website" label="Website Link" type="text"/>
                    <FormInputComponent v-model="speaker.github" label="Github Link" type="text"/>
                    <FormInputComponent v-model="speaker.twitter" label="Twitter Link" type="text"/>
                    <FormInputComponent v-model="speaker.linkedIn" label="LinkedIn Link" type="text"/>
                    <FormTextAreaComponent v-model="speaker.bio" div-classes="sm:tw-col-span-2" label="Bio"
                                           placeholder="Bio"/>
                  </div>
                  <FormButtonComponent label="Make Speaker"
                                       type="button"
                                       @click.prevent="speakerStore.addSpeaker({...speaker, userId: user.userId})">
                  </FormButtonComponent>
                </form>
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>

<style scoped></style>

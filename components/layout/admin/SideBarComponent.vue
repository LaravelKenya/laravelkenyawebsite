<script lang="ts" setup>
import {useNavigationStore} from "~/stores/useNavigationStore";

const navigation = useNavigationStore()
</script>

<template>
  <aside :class="navigation.sideBarOpen ? '' : 'tw-hidden'"
         class="tw-fixed tw-top-0 tw-left-0 tw-z-20 tw-flex tw-flex-col tw-flex-shrink-0  tw-w-64 tw-h-full tw-pt-16 tw-font-normal tw-duration-75 lg:tw-flex transition-width">
    <div
        class="tw-relative tw-flex tw-flex-col tw-flex-1 tw-min-h-0 tw-pt-0 tw-bg-white tw-border-r tw-border-gray-200 dark:tw-bg-gray-800 dark:tw-border-gray-700">
      <div class="tw-flex tw-flex-col tw-flex-1 tw-pt-5 tw-pb-4 tw-overflow-y-auto">
        <div
            class="tw-flex-1 tw-px-3 tw-space-y-1 tw-bg-white tw-divide-y tw-divide-gray-200 dark:tw-bg-gray-800 dark:tw-divide-gray-700">
          <LayoutAdminSideBarLinksComponent/>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped></style>

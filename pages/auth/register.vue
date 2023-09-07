<script lang="ts" setup>
import {User} from "~/types/types";
import {useAuthStore} from "~/stores/useAuthStore";

definePageMeta({
  layout: "auth",
  middleware: "guest"
})
useSeoMeta({
  title: 'Register',
  description: 'Join Laravel Community by registering with us',
  ogTitle: 'Register',
  ogDescription: 'Join Laravel Community by registering with us',
  twitterTitle: 'Register',
  twitterDescription: 'Join Laravel Community by registering with us',
})

const user = ref<User>({
  name: '',
  phoneNumber: '',
  location: '',
  email: '',
  password: '',
  confirmPassword: "",
})
const auth = useAuthStore()

</script>

<template>
  <div class="tw-p-6 tw-space-y-4 md:tw-space-y-6 sm:tw-p-8">
    <h1 class="tw-text-xl tw-font-bold tw-leading-tight tw-tracking-tight tw-text-gray-900 md:tw-text-2xl dark:tw-text-white">
      Register
    </h1>
    <form action="#" class="tw-space-y-4 md:tw-space-y-6">
      <FormInputComponent v-model="user.name" label="Full Name" placeholder="Full Name"/>
      <FormInputComponent v-model="user.email" label="Email Address" placeholder="Email Address" type="email"/>
      <FormInputComponent v-model="user.phoneNumber" label="Phone Number" type="number"/>
      <FormInputComponent v-model="user.location" label="Location" placeholder="Location"/>
      <FormInputComponent v-model="user.password" label="Password" placeholder="••••••••" type="password"/>
      <FormInputComponent v-model="user.confirmPassword" label="Confirm Password" placeholder="••••••••"
                          type="password"/>
      <FormButtonComponent label="Sign Up" @click.prevent="auth.register(user)">
        <Loader v-if="auth.loading"/>
      </FormButtonComponent>
      <p class="tw-text-sm tw-font-light tw-text-gray-500 dark:tw-text-gray-400">
        Already have an account?
        <NuxtLink
            class="tw-font-medium tw-text-primary-600 hover:tw-underline dark:tw-text-primary-500"
            to="/auth/login">Login
        </NuxtLink>
      </p>
    </form>
    <LazyAuthSocialComponent/>
  </div>
</template>

<style scoped></style>

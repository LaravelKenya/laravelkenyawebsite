<script lang="ts" setup>
import {LoginDetails} from "~/types/types";
import {useAuthStore} from "~/stores/useAuthStore";

useSeoMeta({
  title: 'Login',
  description: 'Laravel Community Login Page',
  ogTitle: 'Login',
  ogDescription: 'Laravel Community Login Page',
  twitterTitle: 'Login',
  twitterDescription: 'Laravel Community Login',
})

const auth = useAuthStore()
definePageMeta({
  layout: "auth"
})
const user = ref<LoginDetails>({
  email: '',
  password: '',
})

</script>

<template>
  <div class="tw-p-6 tw-space-y-4 md:tw-space-y-6 sm:tw-p-8">
    <h1 class="tw-text-xl tw-font-bold tw-leading-tight tw-tracking-tight tw-text-gray-900 md:tw-text-2xl dark:tw-text-white">
      Sign in to your account
    </h1>
    <form action="#" class="tw-space-y-4 md:tw-space-y-6">
      <FormInputComponent v-model="user.email" label="Email Address" placeholder="abc@mail.com" type="email"/>
      <FormInputComponent v-model="user.password" label="Password" placeholder="••••••••" type="password"/>
      <div class="tw-flex tw-items-center tw-justify-between tw-align-baseline">
        <FormCheckBoxComponent label="Remember Me"/>
        <a class="tw-text-sm tw-font-medium tw-text-primary-600 hover:tw-underline dark:tw-text-primary-500"
           href="#">Forgot
          password?</a>
      </div>
      <FormButtonComponent label="Sign In" type="button" @click.prevent="auth.login(user)">
        <Loader v-if="auth.loading"/>
      </FormButtonComponent>

      <p class="tw-text-sm tw-font-light tw-text-gray-500 dark:tw-text-gray-400">
        Don’t have an account yet?
        <NuxtLink
            class="tw-font-medium tw-text-primary-600 hover:tw-underline dark:tw-text-primary-500"
            to="/auth/register">Sign up
        </NuxtLink>
      </p>
    </form>
    <AuthSocialComponent/>
  </div>
</template>

<style scoped></style>

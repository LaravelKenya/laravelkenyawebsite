<script lang="ts" setup>
import {LoginDetails} from "~/types/types";
import {useAuthStore} from "~/stores/useAuthStore";

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

  <form style="width: 23rem;">

    <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Log in</h3>

    <div class="form-outline mb-4">
      <input v-model="user.email" class="form-control form-control-lg" type="email"/>
      <label class="form-label">Email address</label>
    </div>

    <div class="form-outline mb-4">
      <input v-model="user.password" class="form-control form-control-lg" type="password"/>
      <label class="form-label">Password</label>
    </div>

    <div class="pt-1 mb-4">
      <button class="btn btn-info btn-lg btn-block" type="button" @click.prevent="auth.login(user)">Login</button>
    </div>

    <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
    <p>Don't have an account?
      <NuxtLink class="link-info" to="/auth/register">Register here</NuxtLink>
    </p>

  </form>
</template>

<style scoped></style>

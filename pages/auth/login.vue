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
  
</template>

<style scoped></style>

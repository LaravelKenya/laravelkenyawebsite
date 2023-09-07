import {useAuthStore} from "~/stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    if (auth.authenticated && auth.accessToken !== "") return navigateTo("/admin/dashboard", {replace: true})
})

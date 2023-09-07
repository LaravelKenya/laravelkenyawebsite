import {LoginDetails, User} from "~/types/types";

export const useAuthStore = defineStore("auth", () => {
    const user = ref<User>({
        name: "",
        phoneNumber: "",
        location: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const loading = ref<boolean>(false)
    const accessToken = ref<string>("")
    const authenticated = ref<boolean>(false)
    const login = async (details: LoginDetails) => {
        loading.value = true
        const {data, pending, error} = await useFetch('/api/auth/login', {
            method: 'POST',
            body: details,
            watch: false
        })
        if (data.value?.user) {
            user.value = data.value?.user as User
            accessToken.value = data.value?.access_token as string
            authenticated.value = true
            loading.value = pending.value
            await navigateTo("/admin/dashboard")
        } else {
            loading.value = pending.value
        }
    }

    const register = async (userReg: User) => {
        loading.value = true
        const {data, pending, error} = await useFetch('/api/auth/register', {
            method: 'POST',
            body: userReg,
            watch: false
        })
        user.value = data.value?.user as User
        loading.value = pending.value
    }

    const logout = async () => {
        user.value = {email: "", location: "", name: "", password: "", phoneNumber: ""}
        accessToken.value = ""
        authenticated.value = false
        await navigateTo("/auth/login")
    }

    return {user, login, register, loading, logout, accessToken, authenticated}
}, {
    persist: true
})
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

    const login = async (details: LoginDetails) => {
        loading.value = true
        const {data, pending, error} = await useFetch('/api/auth/login', {
            method: 'POST',
            body: details,
            watch: false
        })
        user.value = data.value?.user as User
        loading.value = pending.value
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

    return {user, login, register, loading}
})
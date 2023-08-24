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

    const login = async (user: LoginDetails) => {

    }

    const register = async (user: User) => {

    }

    return {user, login, register}
})
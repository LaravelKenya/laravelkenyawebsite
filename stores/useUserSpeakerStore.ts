import {Speaker, User} from "~/types/types";

export const useUserSpeakerStore = defineStore("userSpeaker", () => {
    const users = ref<User []>([])
    const user = ref<User>({
        name: "",
        phoneNumber: "",
        location: "",
        email: "",
        password: ""
    })
    const speaker = ref<Speaker>({
        userId: 0,
        bio: "",
        website: "",
        github: "",
        twitter: "",
        linkedIn: "",
    })
    const loading = ref<boolean>(false)
    const speakers = ref<Speaker[]>([])

    const addSpeaker = async (speaker: Speaker) => {
        loading.value = true
        const {data, pending} = await useApiFetch("/api/speakers", {
            method: "POST",
            body: speaker
        })
        loading.value = false

    }

    const getUser = async (id: number) => {
        loading.value = true
        const {data, pending} = await useApiFetch(`/api/users/${id}`)
        console.log(data.value)
        // @ts-ignore
        user.value = data.value?.data as User
        loading.value = pending.value
    }

    const updateUser = async (user: Speaker & { phoneNumber: string, location: string }) => {
        loading.value = true
        const {data, pending} = await useApiFetch("/api/users", {
            method: "PUT",
            body: user
        })
        console.log(data.value)
        loading.value = false
    }

    const getSpeakers = async () => {
        loading.value = true
        const {data, pending} = await useApiFetch('/api/speakers')
        // @ts-ignore
        speakers.value = data.value?.data as Speaker[]
        loading.value = pending.value
    }

    return {
        addSpeaker,
        loading,
        users,
        user,
        speaker,
        getUser,
        updateUser,
        getSpeakers,
        speakers
    }
})
import {Event as Events, Schedules} from "~/types/types"

export const useEventsStore = defineStore("events", () => {
    const events = ref<Events []>([])
    const event = ref<Events>({
        id: 0,
        name: "",
        location: "",
        date: ""
    })
    const loading = ref<boolean>(false)

    const getEvents = async () => {
        loading.value = true
        const {data, pending} = await useApiFetch("/api/events")
        // @ts-ignore
        events.value = data.value?.data as Events[]
        loading.value = pending.value
    }
    const getEvent = async (id: number) => {
        loading.value = true
        const {data, pending} = await useApiFetch(`/api/events/${id}`)
        // @ts-ignore
        event.value = data.value?.data as Events
        loading.value = pending.value
    }

    const addSchedule = async (eventId: number, schedule: Schedules) => {
        loading.value = true
        schedule.eventId = eventId
        const {data, pending} = await useApiFetch("/api/schedules", {
            method: "post",
            body: schedule
        })
        loading.value = pending.value
    }
    return {getEvents, events, loading, getEvent, event, addSchedule}
})
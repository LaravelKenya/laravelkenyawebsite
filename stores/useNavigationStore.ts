export const useNavigationStore = defineStore("navigation", () => {
    const sideBarOpen = ref<boolean>(false)
    const scheduleModalOpen = ref<boolean>(false)
    const deleteScheduleOpen = ref<boolean>(false)

    const toggleSideBar = () => {
        sideBarOpen.value = !sideBarOpen.value;
    }
    const addScheduleModal = (value: boolean) => {
        scheduleModalOpen.value = value
    }
    const deleteScheduleModal = (value: boolean) => {
        deleteScheduleOpen.value = value
    }
    return {sideBarOpen, toggleSideBar, addScheduleModal, scheduleModalOpen, deleteScheduleModal, deleteScheduleOpen}
})
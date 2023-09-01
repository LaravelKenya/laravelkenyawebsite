export const useNavigationStore = defineStore("navigation", () => {
    const sideBarOpen = ref<boolean>(false)

    const toggleSideBar = () => {
        sideBarOpen.value = !sideBarOpen.value;
    }
    return {sideBarOpen, toggleSideBar}
})
import {UseFetchOptions} from "#app";
import {useAuthStore} from "~/stores/useAuthStore";

export const useApiFetch = async <T>(path: string, options: UseFetchOptions<T> = {}) => {


    const auth = useAuthStore()
    const response = await useFetch(path, {
        ...options,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`,
            ...options.headers
        }
    })
    if (response.error.value?.statusCode === 401) {
        await auth.logout()
    }
    return response
}

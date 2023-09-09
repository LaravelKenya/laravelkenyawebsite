export const parseParam = (param: string | undefined) => {
    if (typeof param === undefined) return undefined
    if (typeof param === "string") {
        try {
            return parseInt(param)
        } catch (e) {
            return false
        }
    }
}
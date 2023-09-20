export const formatDate = (date: string): string => {
    const dateObj = new Date(date)

    return dateObj.toLocaleString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit"
    })
}
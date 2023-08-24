import {prisma} from "~/server/prisma";

export default defineEventHandler(async (event) => {
    const getEvents = async () => {
        return prisma.event.findMany({
            include: {
                schedules: true
            }
        })
    }
    return {
        events: await getEvents()
    }
})

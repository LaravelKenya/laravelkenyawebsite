import {prisma} from "~/server/prisma";

export default defineEventHandler(async (event) => {
    const getSpeakers = async () => {
        return prisma.speaker.findMany({
            include: {
                user: true
            }
        })
    }
    return {
        speakers: await getSpeakers()
    }
})

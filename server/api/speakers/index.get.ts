import {prisma} from "~/server/prisma";

export default defineEventHandler(async (event) => {
    const valid = await verifyAccessToken(event)
    if (!valid) return sendError(event, createError({
        statusCode: 401,
        statusMessage: "UnAuthenticated"
    }))
    const getSpeakers = async () => {
        return prisma.speaker.findMany({
            include: {
                user: true
            }
        })
    }
    return {
        data: await getSpeakers()
    }
})

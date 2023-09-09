import {prisma} from "~/server/prisma";

export default defineEventHandler(async (event) => {
    const valid = await verifyAccessToken(event)
    if (!valid) return sendError(event, createError({
        statusCode: 401,
        statusMessage: "UnAuthenticated"
    }))
    const userCount = async () => {
        return prisma.user.count()
    }
    const eventsCount = async () => {
        return prisma.event.count()
    }
    const feedbackCount = async () => {
        return prisma.contacts.count()
    }
    const speakersCount = async () => {
        return prisma.speaker.count()
    }
    return {
        users: await userCount(),
        events: await eventsCount(),
        feedbacks: await feedbackCount(),
        speakers: await speakersCount()
    }
})

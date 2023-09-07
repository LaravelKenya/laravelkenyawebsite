import {prisma} from "~/server/prisma";
import {Event as SEvent} from "~/types/types"

export default defineEventHandler(async (event) => {
    const valid = await verifyAccessToken(event)
    if (!valid) return sendError(event, createError({
        statusCode: 401,
        statusMessage: "UnAuthenticated"
    }))
    const body: SEvent = await readBody(event)
    const {name, location, date} = body
    if (!name || !location || !date) return sendError(event, createError({
        statusCode: 400, statusMessage: "Invalid params"
    }))
    const createEvent = async (event: SEvent) => {
        return prisma.event.create({
            data: {
                ...event,
                date: new Date(event.date)
            }
        })
    }

    return {event: await createEvent({name, location, date})}
})

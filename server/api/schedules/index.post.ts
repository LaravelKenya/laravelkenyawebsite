import {prisma} from "~/server/prisma";
import {Schedules} from "~/types/types";

export default defineEventHandler(async (event) => {
    const valid = await verifyAccessToken(event)
    if (!valid) return sendError(event, createError({
        statusCode: 401,
        statusMessage: "UnAuthenticated"
    }))
    const body: Schedules = await readBody(event)
    const {eventId, startTime, endTime, description} = body
    if (!eventId || !startTime || !endTime) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Invalid params"
    }))
    const createSchedule = async (schedule: Schedules) => {
        return prisma.schedule.create({
            data: {
                ...schedule,
                startTime: new Date(schedule.startTime),
                endTime: new Date(schedule.endTime)
            }
        })
    }
    return {
        schedule: await createSchedule({eventId, startTime, endTime, description})
    }
})

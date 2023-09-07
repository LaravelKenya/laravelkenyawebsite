import {Speaker} from "~/types/types";
import {prisma} from "~/server/prisma";

export default defineEventHandler(async (event) => {
    const valid = await verifyAccessToken(event)
    if (!valid) return sendError(event, createError({
        statusCode: 401,
        statusMessage: "UnAuthenticated"
    }))
    const body: Speaker = await readBody(event)
    const {userId} = body
    if (!userId) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Please select a user"
    }))
    const createSpeaker = async (speaker: Speaker) => {
        return prisma.speaker.create({
            data: speaker
        })
    }
    const speaker = await createSpeaker({...body})
    return {
        speaker
    }
})

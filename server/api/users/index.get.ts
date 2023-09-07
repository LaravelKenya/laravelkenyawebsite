import {prisma} from "~/server/prisma";

export default defineEventHandler(async (event) => {
    const valid = await verifyAccessToken(event)
    if (!valid) return sendError(event, createError({
        statusCode: 401,
        statusMessage: "UnAuthenticated"
    }))
    const users = async () => {
        return prisma.user.findMany()
    }
    return {
        data: await users()
    }
})

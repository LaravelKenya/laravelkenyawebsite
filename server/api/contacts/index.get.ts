import {prisma} from "~/server/prisma";

export default defineEventHandler(async (event) => {
    const valid = await verifyAccessToken(event)
    if (!valid) return sendError(event, createError({
        statusCode: 401,
        statusMessage: "UnAuthenticated"
    }))
    const contacts = async () => {
        return prisma.contacts.findMany();
    }
    return {
        data: await contacts()
    }
})

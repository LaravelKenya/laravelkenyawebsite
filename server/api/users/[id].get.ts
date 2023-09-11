import {prisma} from "~/server/prisma";

export default defineEventHandler(async (event) => {
    const valid = await verifyAccessToken(event)
    if (!valid) return sendError(event, createError({
        statusCode: 401,
        statusMessage: "UnAuthenticated"
    }))
    const param = event.context.params?.id
    const id = parseParam(param)
    const getUser = async () => {
        return prisma.user.findFirst({
            where: {
                id
            }
        })
    }
    return {
        data: await getUser()
    }
})

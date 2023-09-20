import {parseParam} from "~/server/utils/utils";
import {prisma} from "~/server/prisma";

export default defineEventHandler(async (event) => {
    const param = event.context.params?.id
    const id = parseParam(param)
    if (!id) return sendError(event, createError({
        statusCode: 404,
        statusMessage: "Not Found"
    }))
    const getEvent = async () => {
        return prisma.event.findFirst({
            where: {
                id: id
            },
            include: {
                schedules: true
            }
        })
    }
    return {data: await getEvent()}
})

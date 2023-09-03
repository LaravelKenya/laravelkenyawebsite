import {prisma} from "~/server/prisma";

export default defineEventHandler(async (event) => {
    const users = async () => {
        return prisma.user.findMany()
    }
    return {
        data: await users()
    }
})

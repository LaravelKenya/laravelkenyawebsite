import {prisma} from "~/server/prisma";

export default defineEventHandler(async (event) => {
    const contacts = async () => {
        return prisma.contacts.findMany();
    }
    return {
        data: await contacts()
    }
})

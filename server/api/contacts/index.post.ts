import {prisma} from "~/server/prisma";
import {Contacts} from "~/types/types";

export default defineEventHandler(async (event) => {
    const valid = await verifyAccessToken(event)
    if (!valid) return sendError(event, createError({
        statusCode: 401,
        statusMessage: "UnAuthenticated"
    }))
    const body = await readBody(event)
    const {name, email, subject, message} = body
    if (!name || !email || !subject || !message) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Invalid Params",
            stack: body
        }))
    }
    const createContact = async (contact: Contacts) => {
        return prisma.contacts.create({
            data: contact
        })
    }
    return {
        body: await createContact({name: name, email: email, message: message, subject: subject})
    }
})

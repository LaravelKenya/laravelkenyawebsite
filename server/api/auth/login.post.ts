import {LoginDetails, User} from "~/types/types";
import {prisma} from "~/server/prisma";
import {compare} from "bcrypt";
import {userTransformer} from "~/server/utils/userTransformer";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {email, password} = body as LoginDetails
    if (!email || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Invalid params!!",
            stack: body
        }))
    }

    const findUserByEmail = async (email: string): Promise<User> => {
        return prisma.user.findFirst({
            where: {
                email: email
            },
        })
    }
    const user = await findUserByEmail(email)
    if (!user) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "The user does not exist"
    }))
    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "The user credentials do not match"
    }))
    return {
        user: userTransformer(user)
    }
})

import {LoginDetails} from "~/types/types";
import {prisma} from "~/server/prisma";
import {compare} from "bcrypt";
import {userTransformer} from "~/server/utils/userTransformer";
import {generateTokens, sendRefreshToken} from "~/server/utils/JWT";

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

    const findUserByEmail = async (email: string) => {
        return prisma.user.findFirst({
            where: {
                email: email
            },
            include: {
                Speaker: true
            }
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
    const {accessToken, refreshToken} = generateTokens(user)
    sendRefreshToken(event, refreshToken)
    return {
        access_token: accessToken,
        user: userTransformer(user)
    }
})

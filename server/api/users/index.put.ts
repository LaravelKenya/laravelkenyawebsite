import {prisma} from "~/server/prisma";
import {Speaker, User} from "~/types/types";

export default defineEventHandler(async (event) => {
    const valid = await verifyAccessToken(event)
    if (!valid) return sendError(event, createError({
        statusCode: 401,
        statusMessage: "UnAuthenticated"
    }))
    const body = await readBody(event)
    const {phoneNumber, location, bio, github, twitter, linkedIn, website} = body
    if (!phoneNumber || !location) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Invalid Params"
    }))
    const token = await verifyAccessToken(event)
    const fetchUser = async () => {
        return prisma.user.findFirst({
            where: {
                id: token.userId
            },
            include: {
                Speaker: true
            }
        })
    }
    const user = await fetchUser() as User
    if (!user) return sendError(event, createError({
        statusCode: 401,
        statusMessage: "UnAuthorized"
    }))
    const updateUser = async (userDetails: { phoneNumber: string, location: string }) => {
        return prisma.user.update({
            where: {
                id: user.id
            },
            data: userDetails
        })
    }
    const updateSpeaker = async (speaker: Speaker) => {
        return prisma.speaker.update({
            where: {
                userId: token.userId
            },
            data: speaker
        })
    }
    return {
        data: user.Speaker ? await updateSpeaker({
            userId: token.userId,
            bio: bio,
            github: github,
            twitter: twitter,
            linkedIn: linkedIn,
            website: website
        }) && await updateUser({
            phoneNumber: phoneNumber,
            location: location
        }) : await updateUser({phoneNumber: phoneNumber, location: location})
    }
})

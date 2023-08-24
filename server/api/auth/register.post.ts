import {User} from "~/types/types";
import {prisma} from "~/server/prisma";
import {hashSync} from "bcrypt"

export default defineEventHandler(async (event) => {
    const body: User = await readBody(event)
    const {name, email, role, location, phoneNumber, password, confirmPassword} = body
    if (!name || !email || !location || !phoneNumber || !password || !confirmPassword) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Invalid Params"
    }))
    if (password !== confirmPassword) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Passwords do not match"
    }))
    const registerUser = async (user: User) => {
        return prisma.user.create({
            data: {
                ...user,
                role: "user",
                password: hashSync(user.password, 10)
            }
        })
    }

    return {
        user: await registerUser({name, email, password, location, phoneNumber})
    }
})

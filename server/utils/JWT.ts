import {User} from "~/types/types";
// @ts-ignore
import jwt from "jsonwebtoken"
import {H3Event} from "h3";

const generateAccessTokens = (user: User) => {
    const config = useRuntimeConfig()
    return jwt.sign({userId: user.id}, config.JWT_ACCESS_TOKEN, {
        expiresIn: "10m"
    })
}
const generateRefreshToken = (user: User) => {
    const config = useRuntimeConfig()
    return jwt.sign({userId: user.id}, config.JWT_REFRESH_TOKEN, {
        expiresIn: "4h"
    })
}

export const generateTokens = (user: User) => {
    return {
        accessToken: generateAccessTokens(user),
        refreshToken: generateRefreshToken(user)
    }
}

export const sendRefreshToken = (event: H3Event, token: string) => {
    setCookie(event, "refresh_token", token, {
        httpOnly: true,
        sameSite: true
    })
}

export const decodeRefreshToken = (token: string) => {
    try {
        const config = useRuntimeConfig()
        return jwt.verify(token, config.JWT_REFRESH_TOKEN)
    } catch (e) {
        return e
    }
}

export const decodeAccessToken = (token: string) => {
    try {
        const config = useRuntimeConfig()
        return jwt.verify(token, config.JWT_ACCESS_TOKEN)
    } catch (e) {
        return e
    }
}
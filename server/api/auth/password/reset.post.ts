import {ChangePassword} from "~/types/types";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {currentPassword, newPassword, confirmPassword} = body as ChangePassword

    return {}
})

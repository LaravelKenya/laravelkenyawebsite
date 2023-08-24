import {User} from "~/types/types";

export const userTransformer = (user: User) => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        location: user.location,
        phoneNumber: user.phoneNumber
    }
}
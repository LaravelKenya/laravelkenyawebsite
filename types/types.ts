export interface Contacts {
    name: string,
    email: string,
    subject: string,
    message: string
}

export interface LoginDetails {
    email: string,
    password: string,
    confirmPassword?: string
}

export interface User extends LoginDetails {
    id?: number,
    name: string,
    phoneNumber: string,
    location: string,
    role?: string | ""
}

export interface Speaker {
    id?: number
    bio?: string,
    website?: string,
    github?: string,
    twitter?: string,
    linkedIn?: string,
    img?: string,
    user?: User,
    userId: number
}

export interface Event {
    id?: number,
    name: string,
    location: string,
    date: string
    schedules?: Schedules[]
}

export interface Schedules {
    id?: number,
    startTime: string,
    endTime: string,
    description?: string,
    event?: Event
}
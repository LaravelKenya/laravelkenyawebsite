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
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
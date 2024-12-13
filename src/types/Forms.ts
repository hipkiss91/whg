export type RegisterForm = {
    id: string
    name: string
    email: string
    password: string
    confirmPassword: string
    dateOfBirth: string | null
    service: string
    serviceInput: string | null
    acceptTerms: boolean
};

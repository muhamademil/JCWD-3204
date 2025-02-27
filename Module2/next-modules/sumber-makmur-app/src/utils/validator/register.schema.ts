import { z as zod } from 'zod'

export const registerSchema = zod.object({
    email: zod.string().email("Invalid email format"),
    password: zod.string().min(6, "Password must be at least 6 character")
})

export type RegisterFormData = zod.infer<typeof registerSchema>


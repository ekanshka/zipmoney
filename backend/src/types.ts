
import zod from 'zod'

export const signupSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string().min(3),
    lastName: zod.string().min(3),
    password: zod.string().min(3),
})

export const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(3),
})

export const updateUserSchema = zod.object({
    firstName: zod.string().min(3).optional(),
    lastName: zod.string().min(3).optional(),
    password: zod.string().min(3).optional()
})
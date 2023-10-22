import { z } from 'zod'

export const registerSchema = z
	.object({
		userName: z
			.string({ required_error: 'required' })
			.min(5, { message: 'tooShort' })
			.max(20, { message: 'tooLong' }),
		password: z
			.string({ required_error: 'Password is required' })
			.min(8, { message: 'tooShort' })
			.max(100, { message: 'tooLong' })
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        { message: "requirements" }
      )
			.refine((password) => password !== 'password', { message: 'Common password not allowed' })
			.refine((password) => password !== '123456', { message: 'Common password not allowed' })
			.refine((password) => password !== 'qwerty', { message: 'Common password not allowed' }),
	})


export type RegisterSchema = typeof registerSchema

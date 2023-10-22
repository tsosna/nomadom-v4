import { fail, redirect } from '@sveltejs/kit'
import { registerSchema } from './schema'
import { message, setError, superValidate } from 'sveltekit-superforms/server'
import { LuciaError } from 'lucia'

import { auth } from '$lib/server/lucia'

interface PrismaError extends Error {
	code: string
	meta?: {
		cause: string
	}
}

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, "/");
	return {session};
};


export const actions = {
	register: async ({ request, locals }) => {
		const formData = await request.formData()
		const form = await superValidate(formData, registerSchema)

		if (!form.valid) return fail(400, { form })

		const userName = formData.get('userName') as string
		const password = formData.get('password') as string

		console.log(userName, password)

		try {
			const user = await auth.createUser({
				key: {
					providerId: 'userName',
					providerUserId: userName.toLowerCase(),
					password
				},
				attributes: {
					userName,
					fullName: ''
				}
			})
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			})
			locals.auth.setSession(session)
		} catch (error: unknown) {

			const prismaError = error as PrismaError

			if (prismaError.code === 'P2002') {
				return setError(
					form,
					'userName',
					`${prismaError.code} - ${prismaError.meta?.cause || ''}: User name already exists`,
					{status: 400}
				)
			}
			if (error instanceof LuciaError) {
				return fail(400, { error: error.message })
			}
			return fail(500, {
				error: `${prismaError.code} - ${prismaError.meta?.cause} An unexpected error occurred. Please try again later`
			})
		}
		// return message(form, 'registerSuccess')
		throw redirect(303, '/admin')
	}
}

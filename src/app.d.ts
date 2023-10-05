// See https://kit.svelte.dev/docs/types#app

/// <reference types="lucia" />

type UserAttributes = {
	userName: string
	fullName: string
}

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface Locals {
			auth: import('lucia').AuthRequest
			session: import('lucia').Session | null
		}

		interface PageData {
			session: import('lucia').Session | null
		}

		namespace Lucia {
			type Auth = import('$lib/server/lucia').Auth
			type DatabaseUserAttributes = {
				userName: string
				fullName: string
			}
		}
		// interface PageData {}
		// interface Platform {}
	}

	// eslint-disable-next-line no-var
	var __prisma: import('@prisma/client').PrismaClient
}

export {}

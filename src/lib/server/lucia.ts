import {lucia} from 'lucia'
import { sveltekit } from 'lucia/middleware'  
import { dev } from '$app/environment'
import { prisma as prismaAdapter } from "@lucia-auth/adapter-prisma";
import { prisma } from './prisma'
import type { User } from '$lib/schemas/generated'

export const auth = lucia({
	adapter: prismaAdapter(prisma,{
    user:"user",
    session:"session",
    key: "key"
  }),
	env: dev ? 'DEV' : 'PROD',
  middleware: sveltekit(),
  getUserAttributes: (userData: User) => {
		return {
			userId: userData.id,
      userName: userData.userName,
      fullName: userData.fullName ?? "",
		}
	}
})

export type Auth = typeof auth
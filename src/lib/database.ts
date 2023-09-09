import { dev } from '$app/environment'
import { PrismaClient } from '@prisma/client'

interface CustomNodeJSGlobal extends Global {
	db: PrismaClient
}

declare const global: CustomNodeJSGlobal

const db = global.db || new PrismaClient()

if (dev) {
	global.db = db
}

export default db
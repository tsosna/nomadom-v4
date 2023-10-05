import { projects } from '../src/lib/api/project'
import { elevations } from '../src/lib/api/elevation'

import {prisma} from '../src/lib/server/prisma'

interface PrismaError extends Error {
	code: string
	meta?: {
		cause: string
	}
}

const hash = (url: string) => {
	const elements = url.split('/')
	return elements[elements.length - 1].substring(0, elements[elements.length - 1].indexOf('.'))
}

async function createProject() {
	try {
		await prisma.$transaction(async (prisma) => {
			for (const project of projects) {
				const result = await prisma.img.upsert({
					where: { hash: hash(project.img.thumbnail) },
					create: {
						hash: hash(project.img.thumbnail),
						url: project.img.thumbnail,
						alt: project.alt
					},
					update: {
						alt: project.alt
					},
					select: { id: true }
				})
				await prisma.project.upsert({
					where: { slug: project.slug },
					create: {
						name: project.name,
						slug: project.slug,
						path: '',
						icon: project.icon,
						imgId: result.id
					},
					update: {
						name: project.name,
						path: '',
						icon: project.icon,
						imgId: result.id
					}
				})
			}

			for (const elevation of elevations) {
				const result = await prisma.img.upsert({
					where: { hash: hash(elevation.url) },
					create: { hash: hash(elevation.url), url: elevation.url, alt: elevation.alt },
					update: { alt: elevation.alt },
					select: { id: true }
				})
				await prisma.elevation.upsert({
					where:{imgId: result.id},
					create:{name: elevation.name, imgId:result.id},
					update:{name: elevation.name}
				})
			}
		})
	} catch (error: unknown) {
		const prismaError = error as PrismaError
		console.log({ error: `${prismaError.code} - ${prismaError.meta?.cause}` })
	}
}

createProject()
// console.log(process.env);

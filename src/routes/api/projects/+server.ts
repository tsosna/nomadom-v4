import { json, type RequestHandler } from '@sveltejs/kit'

import db from '$lib/database'

export const GET: RequestHandler = async (event) => {
	const projects = await db.project.findMany({
		include:{img:{select:{alt:true, caption:true, hash:true, url:true}}}
	})

  event.setHeaders({ 'Cache-control': 'public, max-age=0, s-maxage=60'})

	return json(projects)
}

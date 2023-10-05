import { auth } from "$lib/server/lucia";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	// we can pass `event` because we used the SvelteKit middleware
	event.locals.auth = auth.handleRequest(event);
  event.locals.session = await event.locals.auth.validate();

	console.log(event.locals.session);
	

	return await resolve(event);
};
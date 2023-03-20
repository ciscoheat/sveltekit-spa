import { error } from '@sveltejs/kit';
import type { userSchema } from '$lib/user';
import type { PageLoad } from './$types';
import type { z } from 'zod';

export const load = (async ({ params, fetch }) => {
	const id = parseInt(params.id);
	if (!id) throw error(404, 'No user found.');

	const userData = (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
		res.json()
	)) as z.infer<typeof userSchema>;

	// Need to remove nested objects, so it can be used with normal form posting
	// (options.dataType = 'json' is required for nested data)
	const user = Object.fromEntries(
		Object.entries(userData).filter(([, value]) => typeof value !== 'object')
	) as typeof userData;

	return { user };
}) satisfies PageLoad;

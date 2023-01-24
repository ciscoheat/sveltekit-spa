import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const id = parseInt(params.id);
	if (!id) throw error(404, 'No user found.');

	const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
		res.json()
	);

	return user;
}) satisfies PageLoad;

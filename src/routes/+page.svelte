<script lang="ts">
	import { goto } from '$app/navigation';

	let gotoId = 1;
</script>

<h1>Welcome to SvelteKit!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>
	<a href="/user/3">Normal routes</a>, if used only on the client, doesn't require a fallback page,
	but cannot be requested directly (from the browser address field, by search engines, etc) unless a
	fallback page exists. See README for more information.
</p>

<p>
	<a href="/" on:click|preventDefault={() => goto(`/user/${gotoId}`)}>This route</a> is called with goto
	and has the same behavior as the previous one.
</p>

<p>
	<a href="/" on:click|preventDefault={() => (document.location = '/user/2')}>This route</a> is redirected
	with document.location, simulating a browser address field request, and must have a fallback page,
	with the web host being able to redirect to it.
</p>

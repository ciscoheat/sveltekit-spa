<script lang="ts">
	import { goto } from '$app/navigation';

	let gotoId = 1;
</script>

<h1>Welcome to SvelteKit!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation.</p>

<h2>Internal routes</h2>
<p>
	Normal routes like <a href="/user/3">/user/3</a>, if used on the client, doesn't require a
	fallback page, but cannot be requested directly (from the browser address field, by search
	engines, etc) unless a fallback page exists. See
	<a href="https://github.com/ciscoheat/sveltekit-spa#the-fallback-page">this README section</a> for
	how to create one.
</p>

<h2>Goto routes</h2>
<p>
	<a href="/user/{gotoId}" on:click|preventDefault={() => goto(`/user/${gotoId}`)}>This route</a> is
	called with
	<code>goto</code>
	and has the same behavior as the previous one.
</p>

<h2>External routes</h2>
<p>
	<a href="/user/2" on:click|preventDefault={() => (document.location = '/user/2')}>This route</a>
	is redirected with <code>document.location = "/user/2"</code>, simulating a browser address field
	request. It must have a fallback page, with the web host being able to redirect to it.
</p>

<h2>No routes</h2>
<p>
	If your page doesn't have any routes, no fallback is need, and you'll be fine with only <code
		>src/routes</code
	>, without subdirectories.
</p>

<h2>404 page</h2>
<p>
	If no fallback page exists, you'll get the default 404 page from the web host, compared to the one
	you can customize with SvelteKit (<a href="https://kit.svelte.dev/docs/routing#error">docs</a>).
	Try to request a 404 <a href="/nonexisting">here</a>.
</p>

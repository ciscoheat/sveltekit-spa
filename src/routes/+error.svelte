<script>
	import { page } from '$app/stores';

	const message =
		$page.error?.message ??
		($page.status >= 500 ? 'Something went wrong, sorry.' : "Couldn't find the requested page.");
</script>

<h1>{$page.status}</h1>
<h3>{message}</h3>

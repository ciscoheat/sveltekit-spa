<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>{data.name}</h1>
<p>Id: {data.id}</p>

<p><a href="/">&lt; Back to start</a></p>

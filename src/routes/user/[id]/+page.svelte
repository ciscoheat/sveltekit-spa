<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import type { Validation } from 'sveltekit-superforms';
	import { userSchema } from '$lib/user';

	export let data: PageData;

	// For now, construct Validation object manually. This will be fixed
	// in a future version of sveltekit-superforms.
	const validation: Validation<typeof userSchema> = {
		valid: true,
		empty: false,
		errors: {},
		constraints: {},
		data: data.user
	};

	const { form, errors, message, constraints, enhance, delayed } = superForm<typeof userSchema>(
		validation,
		{
			validators: userSchema,
			onError({ result, message }) {
				message.set(result.error.message);
			}
		}
	);
</script>

<h1>Edit user</h1>

{#if $message}<h3>{$message}</h3>{/if}

<form method="POST" use:enhance>
	<input type="hidden" name="id" bind:value={$form.id} />

	<label>
		Name<br />
		<input name="name" data-invalid={$errors.name} bind:value={$form.name} {...$constraints.name} />
		{#if $errors.name}<div class="invalid">{$errors.name}</div>{/if}
	</label>

	<label>
		E-mail<br />
		<input
			name="email"
			type="email"
			data-invalid={$errors.email}
			bind:value={$form.email}
			{...$constraints.email}
		/>
		{#if $errors.email}<div class="invalid">{$errors.email}</div>{/if}
	</label>

	<div class="mt">
		<button>Update</button>
		{#if $delayed}Working...{/if}
	</div>
</form>

<hr class="mt" />
<p><a href="/">&lt; Back to start</a></p>

<style>
	.mt {
		margin-top: 2rem;
	}

	.invalid {
		color: red;
	}

	input {
		width: auto;
		max-width: 300px;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

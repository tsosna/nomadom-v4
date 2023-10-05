<script lang="ts">
	import { i } from '@inlang/sdk-js'
	import { superForm } from 'sveltekit-superforms/client'
	import type { SuperValidated } from 'sveltekit-superforms'

	import type { RegisterSchema } from './schema.js'
	import { toastSuccess, writeError, writeSuccess } from '$lib/components/ui/toast/toast'

	import { Button } from '$lib/components/ui/button'
	import Input from '$lib/components/ui/input/input.svelte'
	import { Label } from '$lib/components/ui/label'
	import Icon from '$lib/components/ui/icon/Icon.svelte'


	export let data: SuperValidated<RegisterSchema>

	

	const { form, errors, enhance, delayed, message } = superForm(data, {
		taintedMessage: null,
		resetForm: false,
		delayMs: 700,
		onResult: ({ result }) => {
			console.log(result.status);
			

			if (result.type === 'success') {
				writeSuccess.message = i('registerSuccess')
				toastSuccess.writeSuccess()
			} else if (result.type === 'failure') {
				writeError.message = i('registerError')
				toastSuccess.writeError()
			}
		}
	})

	$: error = Object.fromEntries(Object.entries($errors).map((key, value) => [key, value]))
</script>

<form method="POST" action="?/register" class="space-y-2" use:enhance>
	<div>
		<Label for="userName">{i('userName')}</Label>
		<Input
			name="userName"
			id="userName"
			placeholder="you@example.com"
			autocapitalize="none"
			autocomplete="email"
			autocorrect="off"
		/>
		{#if $errors.userName}
			<p class="text-danger text-xs italic">
				{#each $errors.userName as error}
					{#if error === 'required'}
						<span class="text-danger text-xs italic">{i('zod.username.required')} </span>
					{:else if error === 'tooLong'}
						<span class="text-danger text-xs italic">{i('zod.username.tooLong')} </span>
					{:else if error === 'tooShort'}
						<span class="text-danger text-xs italic">{i('zod.username.tooShort')} </span>
					{:else}
						{error}
					{/if}
				{/each}
			</p>
		{/if}
	</div>
	<div>
		<Label for="password">{i('password')} Rus-qurd&-9</Label>
		<Input
			type="password"
			name="password"
			id="password"
			autocapitalize="none"
			autocomplete="password"
			autocorrect="off"
		/>
		{#if $errors.password}
			<p class="text-danger text-xs italic">
				{#each $errors.password as error}
					{#if error === 'required'}
						<span class="text-danger text-xs italic">{i('zod.password.required')} </span>
					{:else if error === 'requirements'}
						<span class="text-danger text-xs italic">{i('zod.password.requirements')} </span>
					{:else if error === 'tooShort'}
						<span class="text-danger text-xs italic">{i('zod.password.tooShort')} </span>
					{:else if error === 'tooLong'}
						<span class="text-danger text-xs italic">{i('zod.password.tooLong')} </span>
					{:else}
						{error}
					{/if}
				{/each}
			</p>
		{/if}
	</div>

	<div>
		<Label for="confirmPassword">{i('confirmPassword')}</Label>
		<Input
			type="password"
			name="confirmPassword"
			id="confirmPassword"
			autocapitalize="none"
			autocomplete="password"
			autocorrect="off"
		/>
		{#if $errors.confirmPassword}
			<p class="text-danger text-xs italic">{i('zod.confirmPassword.notMatch')}</p>
		{/if}
	</div>
	<div>
		<Label for="fullName">{i('fullName')}</Label>
		<Input name="fullName" />
	</div>
	<Button type="submit" color="primary" size="lg" variant="nomadom" class="capitalize gap-2">
		{#if $delayed}
			<Icon let:RotateCcw><RotateCcw /></Icon>
		{/if}
		{i('register')}
	</Button>
</form>

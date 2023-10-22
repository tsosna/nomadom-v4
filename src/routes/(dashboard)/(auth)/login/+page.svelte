<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms'
	import type { RegisterSchema } from './schema'
	import { i } from '@inlang/sdk-js'
	import LoginForm from './login-form.svelte'

	export let data: SuperValidated<RegisterSchema>
</script>

<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
	<div class="flex flex-col space-y-2 text-center">
		<h1 class="text-2xl font-semibold tracking-tight">{i("loginTitle")}</h1>
		<p class="text-sm text-muted-foreground">{i("loginSubTitle")}</p>
	</div>
	<LoginForm {data}/>
	<p class="px-8 text-center text-sm text-muted-foreground">
		By clicking continue, you agree to our
		<a href="/terms-of-service" class="underline underline-offset-4 hover:text-primary">
			Terms of Service
		</a>
		and
		<a href="/privacy" class="underline underline-offset-4 hover:text-primary"> Privacy Policy </a>
		.
	</p>
</div>

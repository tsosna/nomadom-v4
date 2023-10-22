<script lang="ts">
	import { page } from "$app/stores";
	import { Button } from "$lib/components/ui/button";
	import Icon from "$lib/components/ui/icon/Icon.svelte"
	import {Language} from "$lib/components/ui/language"
	import {Theme} from "$lib/components/ui/theme"
	import { i } from "@inlang/sdk-js"


	$: link = {
		label: $page.url.pathname === "/sign-up" ? "Login" : "Sign up",
		href: $page.url.pathname === "/sign-up" ? "/login" : "/sign-up"
	};
</script>

<div
	class="container relative hidden h-full min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>

	<Button
		href={link.href}
		variant="ghost"
		class="absolute right-8 top-4 md:right-32 md:top-8"
	>
		{#if $page.url.pathname === "/sign-up"}

			Login
		{:else}
		
			Sign up
		{/if}
	</Button>
	<div class="absolute right-8 top-4 md:right-4 md:top-8">
		<Language label={false}/>
		<Theme label={false}/>
	</div>
	<div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
		<a
			href="/admin"
			class="relative z-20 flex items-center gap-2 text-lg font-medium hover:text-muted-foreground transition-colors"
		>
			<Icon let:Logo>
				<Logo class="h-8 w-8 bg-violet-600" />
			</Icon>
			nomadoM {i("dashboard")}
		</a>
		<div
			class="absolute inset-0 bg-cover"
			style="
				background-image:
					url(https://images.unsplash.com/photo-1573655349936-de6bed86f839?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1320&q=80"
		/>
		<div class="relative z-20 mt-auto">
			<blockquote class="space-y-2 ">
				<p class="text-lg">
					{i("description-web-site")}
				</p>
			</blockquote>
		</div>
	</div>

	<div class="lg:p-8">
		<slot />
	</div>
</div>

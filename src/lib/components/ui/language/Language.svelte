<script lang="ts">
	import type{ VariantProps } from 'tailwind-variants'

	import { i, languages, switchLanguage } from '@inlang/sdk-js'
	import { Button, buttonVariants } from '$components/ui/button'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import { browser } from '$app/environment'

	const userLang = browser && localStorage.getItem('language')

	type Variant = VariantProps<typeof buttonVariants>['variant']
	export let variant: Variant = 'ghost'
	export let label: boolean = true
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			let:Icon
			{variant}
			class="gap-2 border-0 "
			size="sm"
			{...$$restProps}
		>
			<Icon let:Globe><Globe /></Icon>
			{#if label}
				{i(`language.${userLang}`)}
			{/if}
		</Button>
	</DropdownMenu.Trigger>

	<DropdownMenu.Content>
		{#each languages as lang}
			<DropdownMenu.Item
				on:click={() => switchLanguage(lang)}
				class="gap-2"
				aria-label={i(`language.${lang}`)}
				disabled={userLang === `${lang}` ? true : false}
			>
				{i(`language.${lang}`)}
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>

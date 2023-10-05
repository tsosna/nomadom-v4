<script lang="ts">
	import { i, languages, switchLanguage } from '@inlang/sdk-js'
	import { Button } from '$components/ui/button'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import { browser } from '$app/environment'

	const userLang = browser && localStorage.getItem('language')
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			let:Icon
			variant="outline"
			class="gap-2 border-0 bg-accent " 
			size="sm"
		>
			<Icon let:Globe><Globe /></Icon>{i(`language.${userLang}`)}</Button
		>
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

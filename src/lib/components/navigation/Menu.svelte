<script lang="ts">
	import { i } from '@inlang/sdk-js'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import { Button } from '../ui/button'

	
</script>

<!-- <DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			let:Icon
			variant="outline"
			class="gap-2 border-0 bg-accent " 
			size="sm"
		>
			<Icon let:Globe><Globe /></Icon></Button
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
</DropdownMenu.Root> -->

	<Button
		href="about"
		variant="outline"
		size="sm"
		class="border-0  font-light  bg-accent text-lg"
	>
		{i('navBar.about')}
	</Button>
	<Button
		href="pricing"
		variant="outline"
		size="sm"
		class="border-0  font-light  bg-accent text-lg"
	>
		{i('navBar.pricing')}
	</Button>
	<Button
		href="contact"
		variant="outline"
		size="sm"
		class="border-0  font-light  bg-accent text-lg"
	>
		{i('navBar.contact')}
	</Button>


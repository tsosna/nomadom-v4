<script lang="ts">
	import type { VariantProps } from 'tailwind-variants'

	import { i } from '@inlang/sdk-js'
	import { Sun, Moon } from 'lucide-svelte'
	import { toggleTheme, theme, type Theme } from '$lib/theme'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import { Button, buttonVariants } from '../button'

	const Icon = { Sun, Moon }

	const themes: Array<Theme> = ['Sun', 'Moon']

	type Variant = VariantProps<typeof buttonVariants>['variant']
	export let variant: Variant = 'ghost'
	export let label: boolean = true
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class="gap-2" asChild let:builder>
		<Button builders={[builder]} {variant} class="gap-2 border-0 " size="sm">
			<svelte:component this={Icon[$theme]} aria-label={i('theme.phrase')} />
			{#if label}
				{i(`theme.theme${$theme}`)}
			{/if}
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		{#each themes as item}
			<DropdownMenu.Item
				on:click={() => toggleTheme(item)}
				class="gap-2"
				aria-label={i(`theme.theme${item}`)}
				disabled={$theme === `${item}` ? true : false}
			>
				<svelte:component this={Icon[item]} aria-label={i(`theme.theme${item}`)} />
				{i(`theme.theme${item}`)}
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>

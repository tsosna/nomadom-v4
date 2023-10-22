<script lang="ts">
	import type { VariantProps } from 'tailwind-variants'

	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import * as Avatar from '$lib/components/ui/avatar'
	import { Button, buttonVariants } from '$lib/components/ui/button'
	import type { Session } from 'lucia'

	type Variant = VariantProps<typeof buttonVariants>['variant']
	export let variant: Variant = 'ghost'

	export let session: Session
</script>

<DropdownMenu.Root positioning={{ placement: 'bottom-end' }}>
	<DropdownMenu.Trigger asChild let:builder>
		<Button let:Icon builders={[builder]} {variant} class="" size="sm" {...$$restProps}>
			<Icon let:User><User /></Icon>
			<Avatar.Root class="" delayMs={300}>
				<Avatar.Image src="" alt={session.user.username} />
				<Avatar.Fallback class="bg-slate-400"
				>
					
					{session.user.userName.slice(0, 2).toUpperCase()}
					</Avatar.Fallback
				>
			</Avatar.Root>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Label class="font-manrope">
			<div class="flex flex-col space-y-1">
				<p class="text-sm font-medium leading-none">{session.user.fullName ?? ''}</p>
				<p class="text-xs leading-none text-muted-foreground">@{session.user.userName}</p>
			</div>
		</DropdownMenu.Label>
		<DropdownMenu.Separator />

		<form action="?/logout" method="POST">
			<DropdownMenu.Item>
				<Button type="submit" {variant} color="primary" size="sm" class="w-full" {...$$restProps}>
					Log out
				</Button>
				<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
		</form>
	</DropdownMenu.Content>
</DropdownMenu.Root>

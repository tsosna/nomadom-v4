<script lang="ts">
	import { i } from '@inlang/sdk-js'
	import { Button } from '$components/ui/button'
	import { cn } from '$lib/utils'

	let className: string | undefined | null = undefined
	export { className as class }
</script>

<Button let:Logo href="/" variant="outline" class="border-0 gap-2 bg-accent">
	<Logo class={cn('w-9 h-8 p-0.5 rounded-sm', className)} />
	{i('company.title')}
</Button>

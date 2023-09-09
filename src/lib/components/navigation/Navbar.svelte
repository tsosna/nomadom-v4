<script lang="ts">
	import { Brand, } from './'
	import { cn } from '$lib/utils'

	let className: string | undefined | null = undefined
	export { className as class }
</script>

<nav class={cn('flex justify-between items-center text-accent-foreground bg-accent', className)}>
	<slot {Brand}  />
</nav>

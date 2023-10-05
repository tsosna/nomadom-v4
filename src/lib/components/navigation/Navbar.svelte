<script lang="ts">
	import { cn } from '$lib/utils'
	
	import { Brand, Menu} from './'
	import { Theme } from '$lib/components/ui/theme'
	import {Language} from '$lib/components/ui/language'

	let className: string | undefined | null = undefined
	export { className as class }
</script>

<nav class={cn('flex justify-between items-center text-accent-foreground bg-accent', className)}>
	<slot {Brand} {Theme} {Language} {Menu}/>
</nav>

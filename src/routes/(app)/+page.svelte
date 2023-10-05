<script lang="ts">
	import { Navbar } from '$lib/components/navigation'
	import { DropdownMenuItem, DropdownMenuContent } from '$lib/components/ui/dropdown-menu'
	export let data
	const { projects } = data
</script>

<h1>App Page</h1>

<Navbar let:Brand let:Theme let:Language let:Menu>
	<Brand />	
	<!-- <Menu>
		Projects
		<div slot="item">
			<DropdownMenuContent>
				{#each projects as { icon, name, slug }, index}
					<DropdownMenuItem class="gap-2" aria-label={name}>
						<span class="text-lg font-light font-manrope border-2 rounded-full border-pink-700 " >
							{name}
						</span>
					</DropdownMenuItem>
				{/each}
			</DropdownMenuContent>
		</div>
	</Menu> -->
	<Menu/>
	<div>
		<Language />
		<Theme />
	</div>
</Navbar>

<script lang="ts">
	import { Navbar } from '$lib/components/navigation'
	import { i } from '@inlang/sdk-js'
	export let data
	const { projects } = data
</script>

<h1>App Page</h1>

<Navbar let:Brand let:Theme let:Language let:Menu>
	<Brand >{i('company.title')}</Brand>	


	<Menu/>
	<div>
		<Language />
		<Theme />
	</div>
</Navbar>

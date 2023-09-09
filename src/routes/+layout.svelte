<script lang="ts">
	import '../app.postcss'
	import { i } from '@inlang/sdk-js'
</script>


<slot />

<footer class="text-xs">
	&copy <span class="uppercase">{i('company.name')}</span>
	{new Date().getFullYear()}
	{i('copyright')}</footer
>

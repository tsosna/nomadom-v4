<script lang="ts">
	import { AppShell } from '$lib/components/ui/app-shell'
	import Toast from '$lib/components/ui/toast/Toast.svelte'
	import { page } from '$app/stores'

	import { Navbar, UserNav } from '$lib/components/navigation'
	import { i } from '@inlang/sdk-js'
</script>

<svelte:head>
	<link rel="icon" href="adminfavicon.png" />
	<title>nomadoM</title>
	<meta name="description" content="nomadoM" />
</svelte:head>
<Toast position="t" />

<AppShell slotPageHeader='text-2xl text-center'>
	<svelte:fragment slot="header">
		<Navbar let:Brand let:Theme let:Language>
			<Brand class="bg-violet-600">{i('dashboard')}</Brand>
			<div>
				{#if $page.data.session}
					<UserNav session={$page.data.session} />
				{/if}

				<Language />
				<Theme />
			</div>
		</Navbar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Dashboard Header</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>

<script lang="ts">
	import Toast from "$lib/components/ui/toast/Toast.svelte"

	// import '../../app.postcss'
  
</script>

<svelte:head>
  <link rel="icon" href="../adminfavicon.png" />  
  <title>Dashboard</title>
  <meta name="description" content="Dashboard" />
</svelte:head>


<Toast position="t" />

<h1 class="text-violet-600">Dashboard</h1>
<slot />

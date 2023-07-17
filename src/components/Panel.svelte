<script>
	import { slide } from 'svelte/transition';

	export let name;
	let expand = false;
</script>

<div class="panel">
	<div on:click={() => expand = !expand}>
		{name}
	</div>

	{#if expand}
		<div class="contents" transition:slide>
			<slot />
		</div>
	{/if}
</div>

<style>
	.panel {
    background: rgba(0,0,0,.1);
		border: 1px solid rgba(0,0,0,.1);
		padding: 8px;
	}

	.contents {
		padding: 8px;
		margin-top: 16px;
    background: rgba(0,0,0,.1);
	}
</style>
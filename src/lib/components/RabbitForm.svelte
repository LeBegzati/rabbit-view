<script>
	import { serverAddress, store } from '$lib/store.svelte.js';

	let rabbit = $state({
		name: 'New Name',
		rabbithole: ''
	});

	let wrongRabbitName = $derived(rabbit.name.length > 0 && rabbit.name[0] !== 'J');

	let rabbitholes = $state([]);

	async function addRabbit() {
		await store.addRabbit(rabbit);
		name = '';
		store.listRabbits();
	}
</script>

<input type="text" bind:value={rabbit.name} class="text-black" />

<button
	class="btn btn-primary"
	onclick={addRabbit}
	disabled={wrongRabbitName || rabbit.name.length === 0}>Add Rabbit!</button
>
{#if wrongRabbitName}
	<div role="alert" class="mt-4 alert alert-error">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 shrink-0 stroke-current"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<span>Watch out! Rabbit names must start with "J"!</span>
	</div>
{/if}

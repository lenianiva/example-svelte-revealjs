<script lang="ts">
	export let data: PageData;
	const { metadata, slides } = data;
</script>
<svelte:head>
	<title>{metadata.title}</title>
</svelte:head>

<main>
	<table>
		<thead>
		<tr>
			<th>Order</th>
			<th>Slide</th>
		</tr>
		</thead>
		<tbody>
		{#each slides as { title, slug }, i}
			<tr>
				<td>{i}</td>
				<td><a href="/slides/{slug}">{title}</a></td>
			</tr>
		{/each}
		</tbody>
	</table>
</main>

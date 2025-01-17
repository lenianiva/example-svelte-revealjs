<script lang="ts">
	import Markdown from "$lib/slides/Markdown.svelte";
	import Content from "./content.md?raw";
</script>

<section data-transition="zoom">
	<h2>Svelte RevealJS Example</h2>
	<p>
		<small>Chrysoberyl</small>
	</p>
</section>

<Markdown>
	{Content}
</Markdown>

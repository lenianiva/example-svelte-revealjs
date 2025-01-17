<script lang="ts">
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/serif.css';
	import 'reveal.js/plugin/highlight/monokai.css';
	import 'reveal.js/plugin/math/math.js';

	import Reveal            from 'reveal.js';
	import RevealHighlight   from 'reveal.js/plugin/highlight/highlight';
	import RevealNotes       from 'reveal.js/plugin/notes/notes';
	import RevealMath        from 'reveal.js/plugin/math/math';
	import RevealMarkdown    from 'reveal.js/plugin/markdown/markdown.js';
	import { onMount } from 'svelte';
	onMount(() => {
		const deck = new Reveal({
			transitionSpeed: 'fast',
			plugins: [
				RevealMarkdown,
				RevealHighlight,
				RevealMath.KaTeX,
				RevealNotes,
			],
		});
		deck.initialize();
	});
</script>

<link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.11.1/styles/a11y-light.css">
<svelte:head>
	<title>Slides</title>
</svelte:head>

<div class="reveal">
	<div class="slides">
		<slot />
	</div>
</div>

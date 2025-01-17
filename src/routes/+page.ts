import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type Slide = {
	title: string,
	slug?: string,
}
const slides: Slide[] = [
	{ slug: "introduction", title: "Introduction"},
];

export const load: PageLoad = async (_) => {
	return {
		metadata: {
			title: "Svelte RevealJS example"
		},
		slides,
	};
}

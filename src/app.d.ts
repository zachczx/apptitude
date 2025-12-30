// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		declare module '*?enhanced' {
			import type { Picture } from 'vite-imagetools';

			const value: Picture;
			export default value;
		}

		declare module '*&enhanced' {
			import type { Picture } from 'vite-imagetools';

			const value: Picture;
			export default value;
		}
	}
	interface ViewTransition {
		updateCallbackDone: Promise<void>;
		ready: Promise<void>;
		finished: Promise<void>;
		skipTransition: () => void;
	}

	interface Document {
		startViewTransition(updateCallback: () => Promise<void>): ViewTransition;
	}
}

export {};

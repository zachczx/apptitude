import { writable } from 'svelte/store';

export const newitem = new writable([]);

/*
export function writable(value) {
	const subscribers = new Set();

	function set(newValue) {
		value = newValue;
		subscribers.forEach((subscriber) => subscriber(value));
	}

	function update(updater) {
		set(updater(value));
	}

	function subscribe(subscriber) {
		subscribers.add(subscriber);

		return () => {
			subscribers.delete(subscriber);
		};
	}

	return { set, update, subscribe };
}
*/

//export const newitem = writable('');

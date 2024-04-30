import { info } from './data_learn.js';

export function load() {
	const beginner = info.filter((item) => {
		if (item.id <= 5) {
			return item;
		}
	});

	const intermediate = info.filter((item) => {
		if (item.id >= 6 && item.id <= 10) {
			return item;
		}
	});

	const advanced = info.filter((item) => {
		if (item.id >= 11) {
			return item;
		}
	});

	return { beginner, intermediate, advanced };
}

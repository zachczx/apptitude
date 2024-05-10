import { info } from './data_learn.js';

export function load() {
	const beginner = info.filter((item) => {
		if (item.id <= 6) {
			return item;
		}
	});

	const intermediate = info.filter((item) => {
		if (item.id >= 7 && item.id <= 11) {
			return item;
		}
	});

	const advanced = info.filter((item) => {
		if (item.id >= 12) {
			return item;
		}
	});

	return { beginner, intermediate, advanced };
}

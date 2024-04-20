import { info } from './data_learn.js';

export function load() {
	const beginner = info.filter((item) => {
		if (item.id <= 4) {
			return item;
		}
	});

	const intermediate = info.filter((item) => {
		if (item.id >= 5 && item.id <= 8) {
			return item;
		}
	});

	const advanced = info.filter((item) => {
		if (item.id >= 9) {
			return item;
		}
	});

	return { beginner, intermediate, advanced };
}

import { info } from './data_learn';

export function load() {
	const starter = info.filter((item) => {
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

	return { starter, intermediate, advanced };
}

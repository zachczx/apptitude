import { info } from './data_learn.js';

const beginnerInfo = true;
const IntermediateInfo = [4, 5, 6, 7];
const advancedInfo = [8, 9];

export function load() {
	const beginner = info.filter((item) => {
		if (item.id <= 3) {
			return item;
		}
	});

	const intermediate = info.filter((item) => {
		if (item.id >= 4 && item.id <= 7) {
			return item;
		}
	});

	const advanced = info.filter((item) => {
		if (item.id >= 8) {
			return item;
		}
	});

	return { beginner, intermediate, advanced };
}

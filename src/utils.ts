import { colors } from './colors';
import type { Dataset, RawDataItem } from './types';

export const median = (arr: number[]) => {
	if (!arr.length) {
		return undefined;
	}

	const list = [...arr].sort((a, b) => a - b);

	const mid = Math.floor(list.length / 2);

	return list.length % 2 === 0 ? (list[mid - 1] + list[mid]) / 2 : list[mid];
};

export const dataFormatter =
	(key: 'master' | 'pull_requests') =>
	(acc, { name, range, [key]: { duration } }: RawDataItem): Dataset => {
		const data = {
			value: duration ? Math.round(duration / 60000) : 0,
			range,
		};

		return {
			...acc,
			[name]: {
				label: name,
				data: acc[name] ? acc[name].data.concat(data) : [data],
				backgroundColor: colors[name],
				borderColor: colors[name],
			},
		};
	};

export const handleClick = (chart, state) => (_, index) => {
	chart.setDatasetVisibility(index, state);

	chart.update();
};

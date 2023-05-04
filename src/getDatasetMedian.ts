import { median } from './utils';
import type { DatasetItem, ChartData } from './types';

export function getDatasetMedian(data: Record<string, number[]>): DatasetItem {
	return {
		label: 'Goal Median',
		backgroundColor: '#000000',
		borderColor: '#000000',
		data: Object.entries(data).reduce<ChartData[]>((acc, [key, values]) => {
			const items = values.filter((item) => item);

			acc.push({
				range: key,
				value: Math.round(median(items) || 0),
			});

			return acc;
		}, []),
	};
}

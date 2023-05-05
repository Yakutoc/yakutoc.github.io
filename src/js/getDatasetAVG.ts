import type { DatasetItem, ChartData } from './types';

export function getDatasetAVG(data: Record<string, number[]>): DatasetItem {
	return {
		label: 'Goal AVG',
		backgroundColor: '#FF4242',
		borderColor: '#FF4242',
		data: Object.entries(data).reduce<ChartData[]>((acc, [key, values]) => {
			const items = values.filter((item) => item);

			acc.push({
				range: key,
				value: Math.round(items.reduce((acc, item) => acc + item, 0) / items.length),
			});

			return acc;
		}, []),
	};
}

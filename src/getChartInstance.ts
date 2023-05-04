import Chart, { ChartItem } from 'chart.js/auto';
import type { DatasetItem } from './types';

type ChartInstanceConfig = {
	chartItem: ChartItem;
	datasets: DatasetItem[];
	title: string;
};

export function getChartInstance({ chartItem, datasets, title }: ChartInstanceConfig) {
	return new Chart(chartItem, {
		type: 'line',
		data: { datasets },
		options: {
			parsing: {
				xAxisKey: 'range',
				yAxisKey: 'value',
			},
			plugins: {
				title: {
					display: true,
					text: title,
				},
				legend: {
					position: 'right',
				},
			},
		},
	});
}

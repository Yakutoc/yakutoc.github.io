import { Legend, Chart, LineController, CategoryScale, LinearScale, PointElement, Tooltip, LineElement } from 'chart.js';
import type { ChartItem } from 'chart.js';

import type { DatasetItem } from './types';

Chart.register(Legend, LineController, CategoryScale, LinearScale, PointElement, Tooltip, LineElement);

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
			responsive: true,
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

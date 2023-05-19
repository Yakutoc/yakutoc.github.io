import { Legend, Chart, LineController, CategoryScale, LinearScale, PointElement, Tooltip, LineElement } from 'chart.js';
import type { ChartItem } from 'chart.js';

import type { DatasetItem } from './types';

Chart.register(Legend, LineController, CategoryScale, LinearScale, PointElement, Tooltip, LineElement);

type ChartInstanceConfig = {
	chartItem: ChartItem;
	datasets: DatasetItem[];
};

export function getChartInstance({ chartItem, datasets }: ChartInstanceConfig) {
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
				legend: {
					position: 'right',
				},
			},
		},
	});
}

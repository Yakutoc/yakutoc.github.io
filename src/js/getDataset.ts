import { getDateMap } from './getDateMap';
import { getDatasetAVG } from './getDatasetAVG';
import { getDatasetMedian } from './getDatasetMedian';

import type { Dataset } from './types';

export function getDataset(data: Dataset) {
	const dateMap = getDateMap(data);

	const datasetAvg = getDatasetAVG(dateMap);

	const datasetMedian = getDatasetMedian(dateMap);

	return [
		datasetAvg,
		datasetMedian,
		...Object.values(data).filter(({ data }) => {
			return data.some(({ value }) => value);
		}),
	];
}

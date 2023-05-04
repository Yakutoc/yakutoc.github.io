import type { Dataset } from './types';

export function getDateMap(dataset: Dataset) {
	return Object.values(dataset)
		.flatMap(({ data }) => data)
		.reduce((acc, { value, range }) => {
			return {
				...acc,
				[range]: (acc[range] || []).concat(value),
			};
		}, {});
}

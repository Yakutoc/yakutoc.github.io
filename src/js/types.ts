export type Dataset = Record<string, DatasetItem>;

export type RawDataItem = {
	id: number;
	name: string;
	range: string;
	master: {
		duration?: number;
	};
	pull_requests: {
		duration?: number;
	};
};

export type DatasetItem = {
	backgroundColor: string;
	borderColor: string;
	data: ChartData[];
	label: string;
};

export type ChartData = {
	range: string;
	value: number;
};

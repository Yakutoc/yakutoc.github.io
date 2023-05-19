import { getData } from './getData';
import { getChartInstance } from './getChartInstance';
import { getDataset } from './getDataset';
import { dataFormatter, handleClick } from './utils';

(async function () {
	const raw = getData();

	const datasetsPullRequests = raw.reduce(dataFormatter('pull_requests'), {});

	const datasetsMaster = raw.reduce(dataFormatter('master'), {});

	const chartDatasetPr = getDataset(datasetsPullRequests);

	const chartDatasetMaster = getDataset(datasetsMaster);

	const chartCanvasPr = document.getElementById('chart-pr') as HTMLCanvasElement;
	const chartCanvasMaster = document.getElementById('chart-master') as HTMLCanvasElement;

	const chartPR = getChartInstance({
		chartItem: chartCanvasPr,
		datasets: chartDatasetPr,
	});

	const chartMaster = getChartInstance({
		chartItem: chartCanvasMaster,
		datasets: chartDatasetMaster,
	});

	const buttonHiddeAllPr = document.getElementById('hiddeAllPr');
	const buttonShowAllPr = document.getElementById('showAllPr');

	buttonHiddeAllPr &&
		buttonHiddeAllPr.addEventListener('click', () => {
			chartDatasetPr.forEach(handleClick(chartPR, false));
		});

	buttonShowAllPr &&
		buttonShowAllPr.addEventListener('click', () => {
			chartDatasetPr.forEach(handleClick(chartPR, true));
		});

	const buttonHiddeAllMaster = document.getElementById('hiddeAllMaster');
	const buttonShowAllMaster = document.getElementById('showAllMaster');

	buttonHiddeAllMaster &&
		buttonHiddeAllMaster.addEventListener('click', () => {
			chartDatasetPr.forEach(handleClick(chartMaster, false));
		});

	buttonShowAllMaster &&
		buttonShowAllMaster.addEventListener('click', () => {
			chartDatasetPr.forEach(handleClick(chartMaster, true));
		});
})();

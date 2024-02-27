import { getData } from './getData';
import { getChartInstance } from './getChartInstance';
import { getDataset } from './getDataset';
import { dataFormatter, handleClick } from './utils';

(async function () {
	const raw = getData();

	const datasetsPullRequests = raw.reduce(dataFormatter('pull_requests'), {});
	
	const chartDatasetPr = getDataset(datasetsPullRequests).filter(({ label }) => {
		return ![
			'Main Documentation and Storybook',
			'Semgrep',
			'PR demos',
			'Versionate Docs',
			'Clean up S3',
			'Cleanup caches by a branch',
			'.github/workflows/cypress-react-17.yml',
			'Create release PR and generate changelog',
			'Lint/Unit tests'
		].includes(label);
	});
	
	const chartCanvasPr = document.getElementById('chart-pr') as HTMLCanvasElement;

	const chartPR = getChartInstance({
		chartItem: chartCanvasPr,
		datasets: chartDatasetPr,
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
})();

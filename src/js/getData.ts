import * as data1 from '../../data/2023-01-16..2023-01-22.json';
import * as data2 from '../../data/2023-01-23..2023-01-29.json';
import * as data3 from '../../data/2023-01-30..2023-02-05.json';
import * as data4 from '../../data/2023-02-06..2023-02-12.json';
import * as data5 from '../../data/2023-02-13..2023-02-19.json';
import * as data6 from '../../data/2023-02-20..2023-02-26.json';
import * as data7 from '../../data/2023-02-27..2023-03-05.json';
import * as data8 from '../../data/2023-03-06..2023-03-12.json';
import * as data9 from '../../data/2023-03-13..2023-03-19.json';
import * as data10 from '../../data/2023-03-20..2023-03-26.json';
import * as data11 from '../../data/2023-03-27..2023-04-02.json';
import * as data12 from '../../data/2023-04-03..2023-04-09.json';
import * as data13 from '../../data/2023-04-10..2023-04-16.json';
import * as data14 from '../../data/2023-04-17..2023-04-23.json';
import * as data15 from '../../data/2023-04-24..2023-04-30.json';
import * as data16 from '../../data/2023-05-01..2023-05-07.json';
import * as data17 from '../../data/2023-05-08..2023-05-14.json';
import * as data18 from '../../data/2023-05-15..2023-05-21.json';
import * as data19 from '../../data/2023-05-22..2023-05-28.json';
import * as data20 from '../../data/2023-05-29..2023-06-04.json';
import * as data21 from '../../data/2023-06-05..2023-06-11.json';
import * as data22 from '../../data/2023-06-12..2023-06-18.json';
import * as data23 from '../../data/2023-06-19..2023-06-25.json';
import * as data24 from '../../data/2023-06-26..2023-07-02.json';

/**
 * Коллекция данных
 */
export function getData() {
	return [
		...Object.values(data1),
		...Object.values(data2),
		...Object.values(data3),
		...Object.values(data4),
		...Object.values(data5),
		...Object.values(data6),
		...Object.values(data7),
		...Object.values(data8),
		...Object.values(data9),
		...Object.values(data10),
		...Object.values(data11),
		...Object.values(data12),
		...Object.values(data13),
		...Object.values(data14),
		...Object.values(data15),
		...Object.values(data16),
		...Object.values(data17),
		...Object.values(data18),
		...Object.values(data19),
		...Object.values(data20),
		...Object.values(data21),
		...Object.values(data22),
		...Object.values(data23),
		...Object.values(data24),
	];
}

export const convertDate = (date) => {
	const month = new Array(12);
	month[0] = 'Jan';
	month[1] = 'Feb';
	month[2] = 'March';
	month[3] = 'April';
	month[4] = 'May';
	month[5] = 'June';
	month[6] = 'July';
	month[7] = 'Aug';
	month[8] = 'Sept';
	month[9] = 'Oct';
	month[10] = 'Nov';
	month[11] = 'Dec';

	date = new Date(date);

	return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export const sortTableData = (tableData, dataKey, callback) => {

	tableData.forEach((data, index) => {
		if (dataKey) {
			data['Serial Number'] = String(index + 1);
			const keys = Object.keys(dataKey);

			keys.forEach(key => {
				if (key === 'createdAt' || key === 'updatedAt') {
					return data[dataKey[key]] = convertDate(data[key]);
				}
				return data[dataKey[key]] = data[key];
			});
		}
		if (callback) {
			return	callback(data);
		}
		return data;
	});

	return tableData;
};

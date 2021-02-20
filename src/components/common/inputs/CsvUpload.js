import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import * as XLSX from 'xlsx';

const Wrapper = styled.div`
	.csv-input {
		color: blue;
	}
	.error {
		margin-top: 0.5rem;
		color: red;
	}
`;

// take the csv data and return the arr of object with line 1 as the object key
const sortData = (data) => {
	const keys = data[0];
	const result = [];
	data.map((item, i) => {
		if (i > 0) {
			const obj = {};
			keys.map((key, index) => (obj[key] = item[index]));
			return result.push(obj);
		}
		return null;
	});
	result.pop();
	return result;
};

function CsvUpload({  onFileUpload, csvError, error }) {

	const onFileLoaded = (e) => {
		const f = e.target.files[0];
		if (f) {
			const reader = new FileReader();
			reader.onload = (evt) => {
				// evt = on_file_select event
				/* Parse data */
				const bstr = evt.target.result;
				const wb = XLSX.read(bstr, { type: 'binary' });
				/* Get first worksheet */
				const wsname = wb.SheetNames[0];
				const ws = wb.Sheets[wsname];
				/* Convert array of arrays */
				const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
				/* Update state */
				// console.log('Data>>>' + data);
				const value = sortData(data);

				// clear input
				onFileUpload(value);
				// setError('')
				csvError('');
				return;
			};
			reader.readAsBinaryString(f);
			// onFileUpload([]);
		} else {
			e.target.value = '';
			onFileUpload([]);
			// setError('');
			csvError('something bad happened');
		}
	};

	// React.useEffect(() => {
	// 	setError(error);
	// 	return () => setError('');
	// }, [error]);

	return (
		<Wrapper>
			{/* <CSVReader
				onFileLoaded={(data) => {
					value = sortData(data);
					return onFileUpload(value);
				}}
				onError= {error => setError(error)}
			/> */}
			<label className="new-button" htmlFor="upload"></label>
			<input
				id="upload"
				type="file"
				onChange={onFileLoaded}
				// value={value}
				accept=".xls,.xlsx"
			/>
			<p className="error">{error}</p>
		</Wrapper>
	);
}

CsvUpload.propTypes = {
	label: PropTypes.any,
	csvError: PropTypes.func,
	error: PropTypes.any,
	onFileUpload: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired
};

export { CsvUpload };

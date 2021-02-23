import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import * as XLSX from 'xlsx';

const Wrapper = styled.div`
	width: 300px;
	.csv-input {
		color: blue;
	}
	.error {
		margin-top: 0.5rem;
		color: red;
	}
	.custom-file-input::-webkit-file-upload-button {
		visibility: hidden;
	}
	.custom-file-input::before {
		content: 'Select file';
		display: inline-block;
		/* background: linear-gradient(top, #f9f9f9, #e3e3e3); */
		border: 1px solid #999;
		border-radius: 4px;
		padding: 5px 8px;
		outline: none;
		white-space: nowrap;
		-webkit-user-select: none;
		cursor: pointer;
		/* text-shadow: 1px 1px #fff; */
		font-weight: 500;
		font-size: 16px;
		font-family: 'Matteo'
	}
	.custom-file-input:hover::before {
		border-color: black;
	}
	.custom-file-input:active::before {
		background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
	}
`;

// take the csv data and return the arr of object with line 1 as the object key
const sortData = (data) => {
	const cleanArr = data.filter((arr) => arr.length);

	const keys = data[0];
	const result = [];
	cleanArr.map((item, i) => {
		if (i > 0) {
			const obj = {};
			keys.map((key, index) => {
				obj[key] = item[index];
				return obj;
			});
			return result.push(obj);
		}
		return null;
	});
	return result;
};

function CsvUpload({ onFileUpload, csvError, error }) {
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
				className="custom-file-input"
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
	value: PropTypes.any.isRequired,
};

export { CsvUpload };

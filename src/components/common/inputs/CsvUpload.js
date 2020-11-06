import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CSVReader from 'react-csv-reader';
import styled from 'styled-components';

const Wrapper = styled.div`

	.csv-input {
		color: blue;
	}
	.error {
		margin-top: 0.5rem;
		color: red;
	}
`;


const sortData = (data) => {

	const keys = data[0];
	const result = [];
	data.map((item, i) => {
		if (i > 0) {
			const obj = {};
			keys.map((key, index) => obj[key] = item[index]);
			return result.push(obj);
		}
		return null;
	});
	result.pop();
	return result;
};

function CsvUpload({value, onFileUpload, csvError}) {
	const [error, setError] = useState('');

	useEffect(() => {
		setError(csvError);
	}, [csvError]);

	return (
		<Wrapper>
			<CSVReader
				onFileLoaded={(data) => {
					value = sortData(data);
					return onFileUpload(value);
				}}
				onError= {error => setError(error)}
			/>
			<p className='error' >{error}</p>
		</Wrapper>
	);
}

CsvUpload.propTypes = {
	value: PropTypes.any.isRequired,
	onFileUpload: PropTypes.func.isRequired,
	csvError: PropTypes.string
};

export { CsvUpload };


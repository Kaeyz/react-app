import React from 'react';
import PropTypes from 'prop-types';
import CSVReader from 'react-csv-reader';
import styled from 'styled-components';

const Wrapper = styled.div`

	.csv-input {
		color: blue;
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

function CsvUpload({value, onFileUpload}) {
	const [error, setError] = React.useState('');
	return (
		<Wrapper>
			<CSVReader
				onFileLoaded={(data) => {
					value = sortData(data);
					return onFileUpload(value);
				}}
				onError= {error => setError(error)}
			/>
			<p>{error}</p>
		</Wrapper>
	);
}

CsvUpload.propTypes = {
	value: PropTypes.any.isRequired,
	onFileUpload: PropTypes.func.isRequired
};

export { CsvUpload };


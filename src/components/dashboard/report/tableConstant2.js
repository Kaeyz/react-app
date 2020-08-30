import React from 'react';
// This is the table constant/settings which needed to render table elements



export const tableConstants2 = () => {
	return [

		{
			title: 'Quit Cigarettes',
			render: rowData => {
				return <span>{rowData[ 'Quit Cigarettes' ]}</span>;
			},
		},
		{
			title: 'Increase DHL',
			render: rowData => {
				return <span>{rowData[ 'Increase DHL' ]}</span>;
			},
		},
		{
			title: 'Lower Total Cholesterol',
			render: rowData => {
				return <span>{rowData[ 'Lower Total Cholesterol' ]}</span>;
			},
		},
		{
			title: 'Lower Blood Pressure',
			render: rowData => {
				return <span>{rowData[ 'Lower Blood Pressure' ]}</span>;
			},
		},
		{
			title: 'Quit Driving Distracted',
			render: rowData => {
				return <span>{rowData[ 'Quit Driving Distracted' ]}</span>;
			},
		},

	];
};

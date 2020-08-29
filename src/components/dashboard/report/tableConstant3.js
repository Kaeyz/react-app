import React from 'react';
// This is the table constant/settings which needed to render table elements



export const tableConstants3 = () => {
	return [

		{
			title: 'Cause of Death',
			render: rowData => {
				return <span>{rowData[ 'Cause of Death' ]}</span>;
			},
		},
		
		{
			title: 'Men on average',
			render: rowData => {
				return <span>{rowData[ 'Men on average' ]}</span>;
			},
		},
		{
			title: 'Men like you',
			render: rowData => {
				return <span>{rowData[ 'Men like you' ]}</span>;
			},
		},
		{
			title: 'Men like you who live healthy',
			render: rowData => {
				return <span>{rowData[ 'Men like you who live healthy' ]}</span>;
			},
		},

	];
};

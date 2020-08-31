import React from 'react';
// This is the table constant/settings which needed to render table elements



export const tableConstants2 = () => {
	return [

		{
			title: 'Quit Cigarettes',
			render: function QuitCigarettes (rowData) {
				return <span>{rowData[ 'Quit Cigarettes' ]}</span>;
			},
		},
		{
			title: 'Increase DHL',
			render: function IncreaseDhl(rowData) {
				return <span>{rowData[ 'Increase DHL' ]}</span>;
			},
		},
		{
			title: 'Lower Total Cholesterol',
			render: function LowerTC (rowData) {
				return <span>{rowData[ 'Lower Total Cholesterol' ]}</span>;
			},
		},
		{
			title: 'Lower Blood Pressure',
			render: function LowerBC (rowData) {
				return <span>{rowData[ 'Lower Blood Pressure' ]}</span>;
			},
		},
		{
			title: 'Quit Driving Distracted',
			render: function QuitDrivingDistracted (rowData) {
				return <span>{rowData[ 'Quit Driving Distracted' ]}</span>;
			},
		},

	];
};

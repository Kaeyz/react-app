import React from 'react';
// This is the table constant/settings which needed to render table elements

export const tableConstants7 = () => {
	return [
		{
			title: 'SN',
			render: function COMPANYName(rowData) {
				return <span>{rowData['Serial Number']}</span>;
			},
		},
		{
			title: 'EMPLOYEE NAME',
			render: function EMPLOYEEName(rowData) {
				return <span>{rowData['EMPLOYEE NAME']}</span>;
			},
		},
		{
			title: 'DEPARTMENT',
			render: function DateTaken(rowData) {
				return <span>{rowData['DEPARTMENT']}</span>;
			},
		},
		{
			title: 'BRANCH',
			render: function SerialNumber(rowData) {
				return <span>{rowData['BRANCH']}</span>;
			},
		},
		{
			title: 'POINTS',
			render: function SerialNumber(rowData) {
				return <span>{rowData['POINTS']}</span>;
			},
		},

	];
};

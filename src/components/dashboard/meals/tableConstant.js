/*eslint-disable */

import React from 'react';
// This is the table constant/settings which needed to render table elements


export const tableConstants = () => {
	return [

		{
			title: 'DAY',
			render: rowData => {
				return <span>{rowData[ 'Day' ]}</span>;
			},
		},
		{
			title: 'BREAKFAST',
			render: rowData => {
				return <span>{rowData[ 'Breakfast' ]}</span>;
			},
		},
		{
			title: 'LUNCH',
			render: rowData => {
				return <span>{rowData[ 'Lunch' ]}</span>;
			},
		},
		{
			title: 'DINNER',
			render: rowData => {
				return <span>{rowData[ 'Dinner' ]}</span>;
			},
		},

	
	];
};

import React from 'react';

export const tableConstants = () => {
	return [
		{
			title: 'DAY',
			render: function Day (rowData) {
				return <span>{rowData['Day']}</span>;
			},
		},
		{
			title: 'BREAKFAST',
			render: function Breakfast (rowData) {
				return <span>{rowData['Breakfast']}</span>;
			},
		},
		{
			title: 'LUNCH',
			render: function Lunch (rowData) {
				return <span>{rowData['Lunch']}</span>;
			},
		},
		{
			title: 'DINNER',
			render: function Dinner (rowData) {
				return <span>{rowData['Dinner']}</span>;
			},
		},
		{
			title: 'SNACKS',
			render: function Snacks (rowData) {
				return <span>{rowData['Snacks']}</span>;
			},
		},
	];
};

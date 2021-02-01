import React from 'react';


export const tableConstants = () => {
	return [

		{
			title: 'Serial Number',
			render: function SerialNumber (rowData) {
				return <span>{rowData[ 'Serial Number' ]}</span>;
			},
		},
		{
			title: 'Name',
			render:  function EmployeeName (rowData) {
				return <span>{rowData[ 'Name' ]}</span>;
			},
		},
		{
			title: 'Date Taken',
			render: function DateTaken (rowData) {
				return <span>{rowData[ 'Date Taken' ]}</span>;
			},
		},
	];
};

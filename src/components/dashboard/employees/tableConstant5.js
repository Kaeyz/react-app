import React from 'react';
// This is the table constant/settings which needed to render table elements
import Employee from '../employees/Employee';

export const tableConstants5 = () => {
	return [
		{
			title: 'EMPLOYEE NAME',
			render: function EmployeeName(rowData) {
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
			render: function DateTaken(rowData) {
				return <span>{rowData['BRANCH']}</span>;
			},
		},
		{
			title: 'DATE INVITED',
			render: function SerialNumber(rowData) {
				return <span>{rowData['DATE CREATED']}</span>;
			},
		},
		{
			title: '_id',
			render: function ViewReport(rowData) {
				return (
					<div className="flex btn-content">
						<Employee employee={rowData} />
					</div>
				);
			},
		},
	];
};

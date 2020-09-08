import React from 'react';
// This is the table constant/settings which needed to render table elements
import Employee from './Employee';

export const tableConstants4 = () => {
	return [
		{
			title: 'EMPLOYEE  NAME',
			render: function EmployeeName(rowData) {
				return <span>{rowData['EMPLOYEE  NAME']}</span>;
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
			title: 'DATE CREATED',
			render: function SerialNumber(rowData) {
				return <span>{rowData['DATE CREATED']}</span>;
			},
		},
		{
			title: '_id',
			render: function ViewReport(rowData) {
				return (
					<div className="flex deco btn-content">
						<Employee employee={rowData} />
					</div>
				);
			},
		},
	];
};

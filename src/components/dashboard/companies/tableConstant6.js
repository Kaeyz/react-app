import React from 'react';
// This is the table constant/settings which needed to render table elements
import { Link } from 'react-router-dom';

export const tableConstants6 = () => {
	return [
		{
			title: 'COMPANY NAME',
			render: function CompanyName(rowData) {
				return <span>{rowData['COMPANY NAME']}</span>;
			},
		},
		{
			title: 'REPRESENTATIVE',
			render: function DateTaken(rowData) {
				return <span>{rowData['REPRESENTATIVE']}</span>;
			},
		},
		{
			title: 'EMAIL ADDRESS',
			render: function DateTaken(rowData) {
				return <span>{rowData['EMAIL ADDRESS']}</span>;
			},
		},
		{
			title: 'DATE JOINED',
			render: function SerialNumber(rowData) {
				return <span>{rowData['DATE JOINED']}</span>;
			},
		},
		{
			title: '_id',
			render: function ViewReport(rowData) {
				return (
					<Link to={`/companies/${rowData['_id']}`} className="flex deco btn-content">
						View
					</Link>
				);
			},
		},
	];
};

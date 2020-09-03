import React from 'react';
import file from '../../../assets/file_icon.svg';
// This is the table constant/settings which needed to render table elements
import { Link } from 'react-router-dom';


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

		{
			title: 'reportId',
			render: function ViewReport (rowData) {
				return <Link to={`/reports/${rowData.reportId}`} className='flex btn-content'><img src={file} alt="file_icon"/> <p className='text'>View report</p></Link>;
			},
		},
	];
};

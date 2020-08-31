import React from 'react';
// This is the table constant/settings which needed to render table elements



export const tableConstants3 = () => {
	return [

		{
			title: 'Cause of Death',
			render: function CauseOfDeath(rowData) {
				return <span>{rowData[ 'Cause of Death' ]}</span>;
			},
		},

		{
			title: 'Men on average',
			render: function MenOnAverage(rowData) {
				return <span>{rowData[ 'Men on average' ]}</span>;
			},
		},
		{
			title: 'Men like you',
			render: function MenLikeYou (rowData) {
				return <span>{rowData[ 'Men like you' ]}</span>;
			},
		},
		{
			title: 'Men like you who live healthy',
			render:  function MenLivingHealthy (rowData) {
				return <span>{rowData[ 'Men like you who live healthy' ]}</span>;
			},
		},

	];
};

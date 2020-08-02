import React from 'react';
// import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const Wrapper = styled.div`
.table-section {
	  
	.MuiTableContainer-root{
		border-radius: 10px 10px 0px 0px;
		
	}
    h1 {
		margin-bottom:3rem;
      font-size: 20px;
      line-height: 25px;
      letter-spacing: 0.2px;
      color: #000b0a;
      font-weight: bold;
    }
    span {
      color: #2ec4b6;
    }
    .MuiTableCell-head,
    .MuiTableCell-body {
      text-align: center;
    }
    .MuiTableCell-head {
      font-size: 16px;
      line-height: 15px;
      font-family: Matteo;
      letter-spacing: 0.2px;
      color: #000b0a;
    }
    .head-row {
      padding: 4rem 4rem 3rem 4rem;
      height: 8.5rem;
      background-color: rgba(243, 121, 32, 0.05);
      border: 1px solid #f37920;
	  border-radius: 10px 10px 0px 0px;
	//   border: 1px solid palegoldenrod;
      border-radius: 10px;
      .MuiTableCell-head {
        border-bottom: 1px solid #f37920;
      }
    }
    .bottom-row {
      padding: 4rem 8.6rem 4.5rem 4.9rem;
      height: 11rem;
    }
    .MuiTableCell-root {
      padding: 0;
    }
    .MuiTableCell-body {
      font-size: 2rem;
      line-height: 25px;
      letter-spacing: 0.2px;
      color: #0a2523;
    }
  
  `;

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}
const rows = [
	createData(
		'+0 - 3.7yrs',
		'+0 - 5.8yrs',
		'+0 - 2.1yrs',
		'+0 - 0.6yrs',
		'+0 - 1.2yrs'
	),
];

function TableReport() {
	return (
		<Wrapper>
			<TableContainer component={Paper} className='table-section'>
				<Table aria-label="customized table">
					<TableHead>
						<TableRow className="head-row">
							<TableCell>Quit Cigarettes</TableCell>
							<TableCell align="right">Increase DHL</TableCell>
							<TableCell align="right">Lower Total Cholesterol</TableCell>
							<TableCell align="right">Lower Blood Pressure</TableCell>
							<TableCell align="right">Quit Driving Distracted</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name} className="bottom-row">
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.calories}</TableCell>
								<TableCell align="right">{row.fat}</TableCell>
								<TableCell align="right">{row.carbs}</TableCell>
								<TableCell align="right">{row.protein}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

		</Wrapper>
	);
}

// TableReport.propTypes = {

// }

export default TableReport;


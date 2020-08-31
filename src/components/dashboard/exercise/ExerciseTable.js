import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
	margin: 3rem 0 6rem 0;
	@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
		display: none;
	}
    &::-webkit-scrollbar {
      height: .1rem;
    }
      &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.color.ui_08};
      border-radius: 0.5rem;
    }
.table{
  width: 100%;
  background: ${(props) => props.theme.color.text_03};
  border-collapse: collapse;
border-radius: 10px 10px 0px 0px;
min-width: 930px;
    width: 100%;

 
}
.thead{
  font-size: 1.6rem;
line-height: 1.5rem;
letter-spacing: 0.2px;
color: ${(props) => props.theme.color.ui_05};
padding: 4rem 0;
font-weight: normal;
}
.content{
    padding: 2rem 0 4rem 0;
  font-size: 1.6rem;
line-height: 1.5rem;
letter-spacing: -0.2px;
color: ${(props) => props.theme.color.ui_06};
text-align: left;
  &:nth-child(1) { 
    padding-left: 5rem;
      }
  
p{
  font-weight: 300;
font-size: 1.4rem;
line-height: 1.3rem;
letter-spacing: -0.2px;
color: ${(props) => props.theme.color.text_06};
 padding-bottom: 1.6rem;
}
}

thead{
  background: rgba(243, 121, 32, 0.05);
border: 1px solid ${(props) => props.theme.color.ui_08};
}
.width{
  max-width: 45px;
}
tbody{
  text-align: center;
}
`;

const ExerciseTable = ({ whichTable, maxW}) => {
	return (
		<Wrapper className="table-responsive">
			<table  className={`${whichTable} table`} >
				<thead>
					<tr>
						<th className= {`${maxW} thead`}>Programme Overview</th>
						<th className= {' thead'}></th>
						<th className= {' thead'}></th>
						<th className= {' thead'}></th>
						<th className= {' thead'}></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='content'>
							<p>Total Workouts</p>
            30
						</td>
						<td className='content'>
							<p>Number of Weeks</p>
            14
						</td>
						<td className='content'>
							<p>Difficulty</p>
          Medium
						</td>
						<td className='content'>
							<p>Average Duration</p>
          58mins
						</td>
						<td className='content'>
							<p>Equipment Required </p>
          None
						</td>
					</tr>
				</tbody>
			</table>
		</Wrapper>
	);
};

ExerciseTable.propTypes = {
	whichTable: PropTypes.string,
	maxW: PropTypes.string,
};


export default ExerciseTable;
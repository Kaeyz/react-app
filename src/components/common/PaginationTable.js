import Pagination from '@material-ui/lab/Pagination';
import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Filter } from '../common/inputs';

const Wrapper = styled.div`
margin-top: -2rem;
  display: flex;
  justify-content: space-between;
  @media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
    display: grid;
  }
  .flexy{
    @media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
      display: block;
    }
  }
  .select {
    padding-left: 1.5rem;
    @media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
      padding-left: 0rem;
    }
  }
  .MuiPagination-ul>li{
    &:nth-child(1),  &:last-child {
      border: 1px solid ${(props) => props.theme.color.ui_07};
      border-radius: 8px;
      transform: matrix(1, 0, 0, -1, 0, 0);    }
   }
   .MuiPaginationItem-rounded{
    line-height: 2.4rem;
     text-align: center;
    letter-spacing: 0.1px;
        color: ${(props) => props.theme.color.ui_07};
        @media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
          margin: 0;
          padding: 0;
        }
        @media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
          min-width: 29px;
        }
   }

   .MuiPaginationItem-page.Mui-selected {
    color: ${(props) => props.theme.color.ui_06};
    background-color: rgba(0, 0, 0, 0);
  }
`;
function PaginationTable() {
	const options = ['10', '20', '45'];

	return (
		<Wrapper className="main">
			<p>1-10 of 110 companies</p>
			<div className="flex flexy">
				<Pagination
					count={19}
					showPrevButton
					showNextButton
					shape="rounded"
				/>
				<div className="select">
					<Filter placeholder="10" options={options} width={{ width: 70 }}/>
				</div>
			</div>
		</Wrapper>
	);
}

PaginationTable.propTypes = {};

export default PaginationTable;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    margin: 3rem 0 6rem 0;
    &::-webkit-scrollbar {
      height: .1rem;
    }
      &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.color.ui_08};
      border-radius: 0.5rem;
    }
.btn-content{
  color: ${(props) => props.theme.color.ui_08};
  &:hover{
    color: ${(props) => props.theme.color.text_05};
    transition: .3s;
  }
  .text{
    font-weight: normal;
font-size: 1.4rem;
line-height: 1.6rem;
text-decoration-line: underline;
padding-left: 1rem;
  }
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
  
  padding: 2rem 0;
  font-size: 1.4rme;
line-height: 1.6rme;
color: ${(props) => props.theme.color.ui_05};;

}
.longTable{
  .thead{
    &:nth-child(1) { 
         color: ${(props) => props.theme.color.ui_08};
        }
  }
 .content,.thead{
  &:nth-child(1) { 
    padding-left: 5rem;
      text-align: left;
      }
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

const Table = ({ cols, data, whichTable, maxW}) => {
	return (
		<Wrapper className="table-responsive">
			<table  className={`${whichTable} table`} >
				<thead>
					<tr>
						{cols.map((headerItem, index) => (
							<th className= {`${maxW} thead`} key={index}>{headerItem.title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							{cols.map((col, key) => (
								<td className='content' key={key}>{col.render(item)}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</Wrapper>
	);
};

Table.propTypes = {
	cols: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
	whichTable: PropTypes.string,
	maxW: PropTypes.string,
};


export default Table;
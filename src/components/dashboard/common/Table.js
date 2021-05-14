import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 1rem 0 3rem 0;
  &::-webkit-scrollbar {
    height: 0.1rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.ui_08};
    border-radius: 0.5rem;
  }
  .btn-content {
    color: ${(props) => props.theme.color.ui_08};
    &:hover {
      color: ${(props) => props.theme.color.text_05};
      transition: 0.3s;
    }
    .text {
      font-weight: normal;
      line-height: 1.6rem;
      text-decoration-line: underline;
      padding-left: 1rem;
    }
  }
  .deco {
    text-decoration: underline;
  }
  .table {
    width: 100%;
    background: ${(props) => props.theme.color.text_03};
    border-collapse: collapse;
    border-radius: 10px 10px 0px 0px;
    min-width: 930px;
    width: 100%;
  }
  .thead {
    letter-spacing: 0.2px;
    color: ${(props) => props.theme.color.ui_05};
    padding: 1rem 0;
    font-weight: normal;
    font-size: 1.5rem;
  }
  .content {
    padding: 1rem 0.5rem;
    color: ${(props) => props.theme.color.ui_05};
    width: 8rem;
  }
  .longTable {
    .thead {
      &:nth-child(1) {
        color: ${(props) => props.theme.color.ui_08};
      }
    }
    .content,
    .thead {
      &:nth-child(1) {
        padding-left: 2rem;
        text-align: left;
      }
    }
  }
  thead {
    background: rgba(243, 121, 32, 0.05);
    border: 1px solid ${(props) => props.theme.color.ui_08};
  }
  .width {
    max-width: 40px;
  }
  tbody {
    text-align: center;
  }
`;

const Table = ({ cols, data, whichTable, maxW }) => {
	return (
		<Wrapper className="table-responsive">
			<table className={`${classnames(whichTable, 'table')}`}>
				<thead>
					<tr>
						{cols.map((headerItem, index) => (
							<th
								className={`${classnames(maxW, 'thead')}`}
								key={index}
							>
								{headerItem.title === '_id'
									? ''
									: headerItem.title}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							{cols.map((col, key) => (
								<td className="content" key={key}>
									{col.render(item)}
								</td>
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

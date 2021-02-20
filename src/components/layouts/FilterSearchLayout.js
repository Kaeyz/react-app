import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Icon from '../../assets/searchIcon.svg';
import { SearchInput } from '../common/inputs';
/* import filtering from '../../assets/Filter.svg'; */

const Wrapper = styled.div`
  .top-paper {
    box-shadow: 20px 12px 20px rgba(233, 233, 233, 0.25);
    border-radius: 0px;
    padding: 2rem;
    .text {
      font-weight: normal;
      font-size: 2rem;
      line-height: 1.9rem;
      letter-spacing: -0.4px;
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.color.ui_05};
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        font-size: 1.6rem;
      }
      @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
        display: block;
      }
    }
  }
  .searchWithButton {
    padding: 3rem 0;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: block;
    }
    .MuiFormControl-root {
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        width: 100%;
        margin-bottom: 2rem;
      }
    }
    .button {
      width: 100% !important;
    }
  }
  .flexy {
    justify-content: space-between;
  }
  .wrap {
    flex-wrap: wrap;
    .buttons {
      margin-top: 1rem;
    }
  }
  .buttons {
    grid-gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      grid-template-columns: 1fr;
    }
  }
  .oneButton {
    grid-template-columns: 1fr;
  }
  .none {
    display: none;
  }
`;

function FilterSearchLayout({
	children,
	text,
	buttons,
	oneGrid,
	display,
	wrap,
	onSearchSubmit,
	searchPlaceholder,
	title
}) {
	const [searchInput, setSearchInput] = React.useState('');

	return (
		<Wrapper>
			<div>
				<Paper className="top-paper flex flexy">
					<div className="text">{text}</div>
					{/* <div className="filter">
						<Filter Icon={filtering} alt='filtering' placeholder="Filter" options={options} width={{ width: 150 }} />
					</div> */}
				</Paper>
				<div className={`${display} ${wrap} searchWithButton flex flexy`}>
					<SearchInput
						Icon={Icon}
						alt="icon"
						placeholder={searchPlaceholder || ''}
						title={title}
						value={searchInput}
						onChange={setSearchInput}
						onSubmit={onSearchSubmit}
						style={{ width: 300 }}
					/>
					<div className={`${oneGrid} buttons`}>{buttons}</div>
				</div>
				{children}
			</div>
		</Wrapper>
	);
}

FilterSearchLayout.propTypes = {
	children: PropTypes.any.isRequired,
	buttons: PropTypes.any,
	oneGrid: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.any.isRequired,
	display: PropTypes.any,
	wrap: PropTypes.any,
	onSearchSubmit: PropTypes.func,
	searchPlaceholder: PropTypes.string,
};

export default FilterSearchLayout;

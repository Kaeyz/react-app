import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import { Paper, Divider } from '@material-ui/core';
import back from '../../assets/greenBackArrow.svg';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import SetEmployeeLimitModal from '../../components/dashboard/companies/SetEmployeeLimitModal';
import SuspendCompanyModal from '../../components/dashboard/companies/SuspendCompanyModal';

const Wrapper = styled.div`
  .top-paper {
    box-shadow: 20px 12px 20px rgba(233, 233, 233, 0.25);
    border-radius: 0px;
    padding: 2rem;
  }
  #back {
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: ${props => props.theme.color.brand_02};
    align-items: center;
    justify-content: start;
    img {
      padding-right: 0.8rem;
    }
  }
  .grids {
    padding: 4rem 0;
    .headingy,
    .info {
      justify-content: space-between;
      padding: 2rem;
      @media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
        padding: 1rem;
      }
    }
    .detail{
        .grid{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
    .grids-item {
      border: 1px solid ${props => props.theme.color.brand_08};
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.04);
      border-radius: 8px;
      .info{
          p{
            @media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
                font-size: 1.3rem;
            }
          }
        .flexy{
            justify-content: end;
        }
      }
      .boldy {
        font-weight: bold;
        font-size: 1.4rem;
        line-height: 2.2rem;
        color: ${props => props.theme.color.ui_05};
        @media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
            font-size: 1.2rem;
        }
               #modal{
            padding-left: 3rem;
            text-decoration: underline;
            font-weight: normal;
            color:${props => props.theme.color.brand_09};
            cursor: pointer;
            &:hover{
                color: ${props => props.theme.color.ui_05};
                text-decoration: none;
    transition: .3s;
            }
        }
      }
      .web{
        text-decoration: underline;
        &:hover{
          color:${props => props.theme.color.brand_09};
          text-decoration: none;
    transition: .3s;
        }
      }
      .bigy {
        line-height: 1.4rem;
        letter-spacing: .1rem;
      }
    }
  }
`;

function index() {
	return (
		<Wrapper>
			<DashboardLayout whatPage="Employees">
				<Paper className="top-paper ">
					<Link to="/companies">
						<p id="back" className="flex ">
							<img src={back} alt="go-back" />
              Back
						</p>
					</Link>{' '}
				</Paper>

				<Grid container className="grids" spacing={6}>
					<Grid item xs={12} sm={6}>
						<Paper className="grids-item">
							<div className="headingy flex">
								<h1 className="boldy bigy">COMPANY DETAILS</h1>
								<div>
									{' '}
                                    <SuspendCompanyModal/>
								
								</div>
							</div>
							<Divider />
							<div className="detail">
								<div className="info grid">
									<p>Official Name</p>
									<h1 className="boldy">Total Nigeria LTD.</h1>
								</div>
								<div className="info grid">
									<p>Company Email</p>
									<h1 className="boldy">Durodola@total.com.ng</h1>
								</div>
								<div className="info grid">
									<p>Company website</p>
									<Link to='#companyWebsite'>
										<h1 className="boldy web">Total.com.ng</h1>
									</Link>
								</div>
								<div className="info grid">
									<p>Company Address</p>
									<h1 className="boldy">4, Churchgate Street, Victoria Island, Lagos, Nigeria.</h1>
								</div>
								<div className="info grid">
									<p>Employee invited</p>
									<h1 className="boldy">50</h1>
								</div>
								<div className="info grid">
									<p>Employee Limit</p>
									<h1 className="boldy flex flexy">
                    200 <span id='modal'> <SetEmployeeLimitModal/></span>
									</h1>
								</div>
							</div>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper className="grids-item">
							<div className="headingy flex">
								<h1 className="boldy bigy">REPRESENTATIVE DETAILS</h1>
								<div>
									{' '}
								</div>
							</div>
							<Divider />
							<div className="detail">
								<div className="info grid">
									<p>Representative Name</p>
									<h1 className="boldy">Mr. Daniel  Bassey</h1>
								</div>
								<div className="info grid">
									<p>Email Address</p>
									<h1 className="boldy">Daniel_bassey@total.com.ng</h1>
								</div>
								<div className="info grid">
									<p>Designation</p>
									<h1 className="boldy">Human  Resource (HR)</h1>
								</div>
								<div className="info grid">
									<p>Date Created</p>
									<h1 className="boldy">
                  February 26, 2020.
									</h1>
								</div>
							</div>
						</Paper>
					</Grid>
				</Grid>
			</DashboardLayout>
		</Wrapper>
	);
}

index.propTypes = {};

export default index;

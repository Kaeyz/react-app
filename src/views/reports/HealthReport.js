import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import smallImg from '../../assets/Activity.svg';
import QuestionnaireLayout from '../../components/dashboard/assessment/hra_questionnaire/QuestionnaireLayout';
import AnalysisCard from '../../components/dashboard/common/AnalysisCard';
import ReportPaper from '../../components/dashboard/report/ReportPaper';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import {
	downloadReportPdf,
	getReport
} from '../../store/actions/reportActions';

const LinkWrapper = styled(Link)`
	text-decoration: none;
	/* text-decoration-color: black; */
	&:active {
		text-decoration: none;
		color: red;
	}
	&:visited {
		color: ${(props) => props.theme.color.brand_01};
	}
	&:hover {
		border-bottom: 2px solid ${(props) => props.theme.color.brand_02};
		cursor: pointer;
		color: ${(props) => props.theme.color.text_01};
	}
`;

const Wrapper = styled.div`
	.null {
		border: 1px solid rgba(214, 216, 211, 0.5);
		width: -webkit-fill-available;
		margin: 10px 0px;
	}
	.top-header {
		margin: 2rem 0;
		#risk-level {
			width: 13%;
		}
		p {
			font-weight: bold;
			letter-spacing: 1.8px;
			color: ${(props) => props.theme.color.ui_05};
			margin-right: 2rem;
			text-transform: uppercase;
		}
	}
	.analysis-card {
		margin: 0 0 2rem 0;
		display: grid;
		grid-gap: 2rem;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		&::-webkit-scrollbar {
			height: 0.3rem;
		}

		&::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		}

		&::-webkit-scrollbar-thumb {
			background-color: red;
			outline: 1px solid slategrey;
		}
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: flex;
			overflow: scroll;
			overflow-y: hidden;
			justify-content: end;
		}
	}
`;

function HealthReport({
	getReport,
	reportData,
	downloadReportPdf,
	isLoading,
	match,
}) {
	const { reportId } = match.params;

	React.useEffect(() => {
		getReport(reportId);
	}, [getReport, reportId]);
	return (
		<Wrapper>
			<DashboardLayout whatPage="Reports">
				<QuestionnaireLayout
					heading="Health Risk Report"
					Image={smallImg}
					reportButton={true}
					// exerciseButton={true}
					downloadAction={() => downloadReportPdf(reportId)}
					Link="/assessment/health/review"
				>
					<div className="flex top-header">
						<h3>ANALYSIS</h3>
						<div className="null" />
					</div>
					{isLoading ? (
						<div>Loading ...</div>
					) : (
						<div className="flex analysis-card">
							<AnalysisCard
								cardTheme="green"
								cardHeading="Current Age"
								cardInfo="This is your real or current age as entered on the platform"
								cardValue={reportData?.actual_age || 'No Value'}
							/>
							<AnalysisCard
								cardTheme="blue"
								cardHeading="Your Target Age"
								cardInfo="Your target age is what you ideally want your risk age to be, achievable if you made changes to your lifestyle."
								cardValue={
									(reportData?.target_age &&
										Number(reportData?.target_age).toFixed(
											2,
										)) ||
									'No Value'
								}
							/>
							<AnalysisCard
								cardTheme="pink"
								cardHeading="Your Risk Age"
								cardInfo="Your risk age compares you to other people your age and sex and estimates the age you are operating at based on your lifestyle choices."
								cardValue={
									(reportData?.risk_age &&
										Number(reportData?.risk_age).toFixed(
											2,
										)) ||
									'No Value'
								}
							/>
						</div>
					)}
					<ReportPaper
						cardHeading="For your next steps!"
						cardBody={cardBody()}
					/>
				</QuestionnaireLayout>
			</DashboardLayout>
		</Wrapper>
	);
}

const cardBody = () => (
	<>
		<p>We have solutions to enhance your lifestyle for:</p>

		<ul>
			<li><LinkWrapper to="/meals">Meal guidelines via Custom Meal Schedule Creator.</LinkWrapper></li>
			<li><LinkWrapper to="/appointments">To speak to a consultant via Appointments.</LinkWrapper></li>
			<li><LinkWrapper to="/exercise">To get and stay in shape via Exercise.</LinkWrapper></li>
		</ul>
	</>
);

HealthReport.propTypes = {
	getReport: PropTypes.func.isRequired,
	downloadReportPdf: PropTypes.func.isRequired,
	reportData: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
	const { report, isLoading } = state.report;
	return { reportData: report, isLoading };
};

export default connect(mapStateToProps, { getReport, downloadReportPdf })(
	withRouter(HealthReport),
);

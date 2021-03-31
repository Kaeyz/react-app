import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
								cardTheme="blue"
								cardHeading="Your Target Age"
								cardInfo="Your target age is what you ideally want your risk age to be, achievable if you made changes to your lifestyle."
								cardValue={Number(
									reportData?.target_age,
								).toFixed(2) && 'No Value'}
							/>
							<AnalysisCard
								cardTheme="pink"
								cardHeading="Your Risk Age"
								cardInfo="Your risk age compares you to other people your age and sex and estimates the age you are operating at based on your lifestyle choices."
								cardValue={Number(reportData?.risk_age).toFixed(
									2
								) && 'No Value'}
							/>
							<AnalysisCard
								cardTheme="green"
								cardHeading="Current Age"
								cardInfo="This is your real or current age as entered on the platform"
								cardValue={reportData?.actual_age || 'No Value'}
							/>
						</div>
					)}
					<ReportPaper
						cardHeading="Disclaimer!!!"
						cardBody={
							'Many serious injuries and health problems can be prevented but remember that a Health Risk Assessment DOES NOT take the place of a doctor or checkup and DOES NOT tell you if you have a medical problem. A Health Risk Assessment points out your highest health risks and gives you some ideas on how you might lower your risks to help guide you to better health.'
						}
					/>
				</QuestionnaireLayout>
			</DashboardLayout>
		</Wrapper>
	);
}

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

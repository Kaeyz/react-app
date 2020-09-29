import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { getReport, downloadReportPdf } from '../../store/actions/reportActions';
import { connect } from 'react-redux';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../components/dashboard/assessment/hra_questionnaire/QuestionnaireLayout';
import smallImg from '../../assets/Activity.svg';
import AnalysisCard from '../../components/dashboard/common/AnalysisCard';
import ReportPaper from '../../components/dashboard/report/ReportPaper';



const Wrapper = styled.div`
  .null {
    border: 1px solid rgba(214, 216, 211, 0.5);
    width: -webkit-fill-available;
    margin: 10px 0px;
  }
  .top-header {
	margin: 4rem 0;
	#risk-level{
	  width: 13%;
	}
    p {
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 1.6rem;
      letter-spacing: 1.8px;
      color: ${(props) => props.theme.color.ui_05};
	  margin-right: 2rem;
	  text-transform: uppercase;
	      }
  }
  .analysis-card {
	margin: 0 0 4rem 0;
	display: grid;
	grid-gap: 4rem;
	grid-template-columns: 1fr 1fr 1fr;
	&::-webkit-scrollbar {
		height: .3rem;
	}

	&::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	}

	&::-webkit-scrollbar-thumb {
	  background-color: darkgrey;
	  outline: 1px solid slategrey;
	}
	@media screen and ( max-width: ${(props) => props.theme.breakpoint.md}) {
		display: flex;
		overflow: scroll;
		overflow-y: hidden;
		justify-content: end;
	}
}

`;

function HealthReport({ getReport, reportData, downloadReportPdf, isLoading, match }) {

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
					Link="/assessment/health/review">
					<div className="flex top-header">
						<p>ANALYSIS</p>
						<div className="null" />
					</div>
					{
						isLoading ?
							<div>Loading ...</div>
							:
							<div className="flex analysis-card">
								<AnalysisCard
									cardTheme="blue"
									cardHeading="Your Target Age"
									cardInfo="Your target age is what you want  your risk age to be if  you made changes to your lifestyle."
									cardValue={Number(reportData.target_age).toFixed(2)}
								/>
								<AnalysisCard
									cardTheme="pink"
									cardHeading="Your Risk Age"
									cardInfo="Your risk age compares  you to other people , your age and sex for all causes of death"
									cardValue={Number(reportData.risk_age).toFixed(2)}
								/>
								<AnalysisCard
									cardTheme="green"
									cardHeading="Current Age"
									cardInfo="Lorem Ipsum has been the industry's stan is the dard dummy text."
									cardValue={reportData.actual_age}
								/>
							</div>
					}
					<ReportPaper
						cardHeading="Disclaimer!!!"
						cardBody={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'}
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
	isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	const { report, isLoading } = state.report;
	return { reportData: report, isLoading };
};

export default connect(mapStateToProps, {getReport, downloadReportPdf})(withRouter(HealthReport));

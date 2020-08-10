import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getHraReportData, getHraPdf } from '../../../../store/actions/hraActions';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/dashboard/assessment/hra_questionnaire/QuestionnaireLayout';
import smallImg from '../../../../assets/Activity.svg';
import absoluteImg from '../../../../assets/undraw_through_the_park.svg';
import AnalysisCard from '../../../../components/dashboard/common/AnalysisCard';
import TableReport from '../../../../components/dashboard/report/TableReport';
import ReportPaper from '../../../../components/dashboard/report/ReportPaper';
import GraphReport from '../../../../components/dashboard/report/GraphReport';
// import Button from '../../../../components/common/Button';


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
	#death{
		width: 92%;

	}
    p {
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.paperWithPicture{
	justify-content: flex-end;
	position: relative;
	height: 240px;
	margin: 6rem 0;
	img{
		width: 340px;
height: 240px;
position: absolute;
    left: 60px;
    bottom: 30px;
	}
	.details{
		width: 600px;
		max-width: 58%;
		h1 {
			font-size: 20px;
			line-height: 180%;
			letter-spacing: 0.2px;
			color: ${(props) => props.theme.color.ui_05};
			font-weight: bold;
			width: 100%;
			margin-bottom: 1rem;
		  }
		  p{
			font-size: 20px;
			line-height: 40px;
			letter-spacing: 0.2px;
			color: ${(props) => props.theme.color.ui_06};
		  }
	}
}
`;

function HealthReport({getHraReportData, reportData, getHraPdf, isLoading}) {

	React.useEffect(() => {
		getHraReportData();
	}, [getHraReportData]);

	return (
		<Wrapper>
			<DashboardLayout>
				<QuestionnaireLayout
					heading="Health Risk Report"
					Image={smallImg}
					reportButton={true}
					downloadAction={getHraPdf}
				>
					<div className="flex top-header">
						<p>ANALYSIS</p>
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
									cardValue={Number(reportData.targetAge).toFixed(2)}
								/>
								<AnalysisCard
									cardTheme="pink"
									cardHeading="Your Risk Age"
									cardInfo="Your risk age compares  you to other people , your age and sex for all causes of death"
									cardValue={Number(reportData.riskAge).toFixed(2)}
								/>
								<AnalysisCard
									cardTheme="green"
									cardHeading="Current Age"
									cardInfo="Lorem Ipsum has been the industry's stan is the dard dummy text."
									cardValue={reportData.actualAge}
								/>
							</div>
					}
					<ReportPaper
						cardHeading="Healthier living can reduce your risks by 13.3 years"
						cardBody={`Your has been the industry's standard dummy text ever since the 1500s, when
						 an unknown printer took a galley of type
						  and scrambled it to make a type specimen
						   book.It has survived not only five
						   centuries.`}
					/>
					<TableReport

					/>
					<ReportPaper
						cardHeading="Guidelines for Good Health"
						cardBody={'1. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'}
						cardBody2={'2. The any desktop publishing packages and web page editors now use Lorem Ipsum.'}
						cardBody3={'3. Various versions have evolved over the years, sometimes by accident.'}
						cardBody4={'4. This book is a treatise on the theory of ethics, very popular during the Renaissance'}
					/>

					<ReportPaper
						cardHeading="Routine preventive service for Men of your age."
						cardBody={'1. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'}
						cardBody2={'2. The any desktop publishing packages and web page editors now use Lorem Ipsum.'}
						cardBody3={'3. Various versions have evolved over the years, sometimes by accident.'}
						cardBody4={'4. This book is a treatise on the theory of ethics, very popular during the Renaissance'}
					/>
					<Paper className="paperWithPicture flex">
						<img src={absoluteImg} alt="absoluteImg" className="absolutePic"/>

						<div className="details">
							<h1>
						Good news  is , you are already doing things to keep your health risk low</h1>
							<p>You took a health risk assessment</p>
						</div>

					</Paper>

					<GraphReport />

					<ReportPaper
						cardHeading="How to Lower your risk of  :"
						cardBody={'1. Heart Attack: are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'}
						cardBody2={'2. Motor Vehicle crash: publishing packages and web page editors now use Lorem Ipsum.'}
						cardBody3={'3. Lungs Cancer: have evolved over the years, sometimes by accident..'}
						cardBody4={'4. Stroke: is a treatise on the theory of ethics, very popular during the Renaissance'}
						cardBody5={'5. Diabetes Mellitus: is a treatise on the theory of ethics, very popular during the Renaissance'}
					/>
					<ReportPaper
						cardHeading="General Recommendations for Everyone"
						// {`${fontSize}`}
						cardBody={'1. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'}
						cardBody2={'2. The any desktop publishing packages and web page editors now use Lorem Ipsum velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
					/>
					<ReportPaper
						cardHeading="Other Health Concerns  for you:"
						cardBody={'E-Cigarettes:  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
						cardBody2={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'}
					/>

					<div className="flex top-header">
						<p id="risk-level">RISK LEVELS</p>
						<div className="null"></div>
					</div>
					<ReportPaper
						cardHeading="Other Health Concerns  for you:"
						cardSubheading="High Risk"
						cardBody={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'}
					/>
					<ReportPaper
						cardHeading="B. Nutrition Risk Level"
						cardSubheading="Very High Risk"
						cardBody={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'}
						cardBody2={'1. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'}
						cardBody3={'2. The any desktop publishing packages and web page editors now use Lorem Ipsum velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
						cardBody4={'3. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'}
						cardBody5={'4. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'}
					/>
					<ReportPaper
						cardHeading="C. Mental Health Status"
						cardSubheading="1. General  Depression - Average Risk"
						cardBody={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'}
						cardSubheading2="2. General Anxiety - Average Risk"
						cardBody3={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'}
					/>
					<ReportPaper
						cardHeading="D. Body Weight Risk"
						cardSubheading="High Risk"
						cardBody={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'}
					/>
					<ReportPaper
						cardHeading="E. Mental Health Risk"
						cardSubheading="High Risk"
						cardBody={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'}
					/>

					<div className="flex top-header">
						<p id='death'>Deaths per 100,000 men over the next 10 years</p>
						<div className="null"></div>
					</div>

					<ReportPaper
						color='blue'
						cardHeading="The aim of this Table:"
						cardBody={'Your has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries.'}
					/>

					<TableReport/>

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
	getHraReportData: PropTypes.func.isRequired,
	getHraPdf: PropTypes.func.isRequired,
	reportData: PropTypes.object.isRequired,
	isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	const { reportData, isLoading } = state.hra;
	return { reportData, isLoading };
};

export default connect(mapStateToProps, {getHraReportData, getHraPdf})(HealthReport);

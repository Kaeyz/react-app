import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import DashboardLayout from "../../../../components/layouts/dashboardLayout/DashboardLayout";
import QuestionnaireLayout from "../../../../components/dashboard/assessment/hra_questionnaire/QuestionnaireLayout";
import smallImg from "../../../../assets/Activity.svg";
import AnalysisCard from "../../../../components/dashboard/common/AnalysisCard";
import ReportPaper from "../../../../components/dashboard/report/ReportPaper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// import Button from '../../../../components/common/Button';
const Wrapper = styled.div`
  .null {
    border: 1px solid rgba(214, 216, 211, 0.5);
    width: -webkit-fill-available;
    margin: 10px 0px;
  }
  .top-header {
    margin: 4rem 0;
    p {
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
      letter-spacing: 1.8px;
      color: #000b0a;
      margin-right: 2rem;
    }
  }
  .analysis-card {
    justify-content: space-between;
  }
  .table-section {
	.MuiTableContainer-root{
		border-radius: 10px 10px 0px 0px;
	}
    h1 {
      font-size: 20px;
      line-height: 25px;
      letter-spacing: 0.2px;
      color: #000b0a;
      font-weight: bold;
    }
    span {
      color: #2ec4b6;
    }
    .MuiTableCell-head,
    .MuiTableCell-body {
      text-align: center;
    }
    .MuiTableCell-head {
      font-size: 16px;
      line-height: 15px;
      font-family: Matteo;
      letter-spacing: 0.2px;
      color: #000b0a;
    }
    .head-row {
      padding: 4rem 4rem 3rem 4rem;
      height: 8.5rem;
      background-color: rgba(243, 121, 32, 0.05);
      border: 1px solid #f37920;
	  border-radius: 10px 10px 0px 0px;
	//   border: 1px solid palegoldenrod;
      border-radius: 10px;
      .MuiTableCell-head {
        border-bottom: 1px solid #f37920;
      }
    }
    .bottom-row {
      padding: 4rem 8.6rem 4.5rem 4.9rem;
      height: 11rem;
    }
    .MuiTableCell-root {
      padding: 0;
    }
    .MuiTableCell-body {
      font-size: 2rem;
      line-height: 25px;
      letter-spacing: 0.2px;
      color: #0a2523;
    }
  }
`;
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData(
    "+0 - 3.7yrs",
    "+0 - 5.8yrs",
    "+0 - 2.1yrs",
    "+0 - 0.6yrs",
    "+0 - 1.2yrs"
  ),
];
function HealthReport() {
  return (
    <Wrapper>
      <DashboardLayout>
        <QuestionnaireLayout
          heading="Health Risk Report"
          Image={smallImg}
          button="showButton"
        >
          <div className="flex top-header">
            <p>ANALYSIS</p>
            <div className="null"></div>
          </div>
          <div className="flex analysis-card">
            <AnalysisCard
              cardTheme="blue"
              cardHeading="Your Target Age"
              cardInfo="Your target age is what you want  your risk age to be if  you made changes to your lifestyle."
              cardValue="49.8"
            />
            <AnalysisCard
              cardTheme="pink"
              cardHeading="Your Risk Age"
              cardInfo="Your risk age compares  you to other people , your age and sex for all causes of death"
              cardValue="61.8"
            />
            <AnalysisCard
              cardTheme="green"
              cardHeading="Current Age"
              cardInfo="Lorem Ipsum has been the industry's stan is the dard dummy text."
              cardValue="51.8"
            />
          </div>
          <ReportPaper
            cardHeading="Healthier living can reduce your risks by 13.3 years"
            cardBody={`Your has been the industry's standard dummy text ever since the 1500s, when
						 an unknown printer took a galley of type
						  and scrambled it to make a type specimen
						   book.It has survived not only five
						   centuries.`}
          />
          <div className="table-section">
            <h1>
              What can you do to Lower your risks by <span>13.6</span> years
            </h1>
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow className="head-row">
                    <TableCell>Quit Cigarettes</TableCell>
                    <TableCell align="right">Increase DHL</TableCell>
                    <TableCell align="right">Lower Total Cholesterol</TableCell>
                    <TableCell align="right">Lower Blood Pressure</TableCell>
                    <TableCell align="right">Quit Driving Distracted</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name} className="bottom-row">
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <ReportPaper
            cardHeading="Guidelines for Good Health"
            cardBody={`1. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`}
            cardBody2={`2. The any desktop publishing packages and web page editors now use Lorem Ipsum.`}
            cardBody3={`3. Various versions have evolved over the years, sometimes by accident.`}
            cardBody4={`4. This book is a treatise on the theory of ethics, very popular during the Renaissance`}
          />

          <ReportPaper
            cardHeading="Routine preventive service for Men of your age."
            cardBody={`1. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`}
            cardBody2={`2. The any desktop publishing packages and web page editors now use Lorem Ipsum.`}
            cardBody3={`3. Various versions have evolved over the years, sometimes by accident.`}
            cardBody4={`4. This book is a treatise on the theory of ethics, very popular during the Renaissance`}
          />
        </QuestionnaireLayout>
      </DashboardLayout>
    </Wrapper>
  );
}

// HealthReport.propTypes = {

// }

export default HealthReport;

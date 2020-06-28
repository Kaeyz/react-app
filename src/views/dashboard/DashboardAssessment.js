import React from "react";
import DashboardLayout from "../../components/layouts/dashboardLayout/DashboardLayout";
import { makeStyles } from "@material-ui/core/styles";
// import Container from '../common/Container';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: "rgba(229,229,229,.2)",
  },
}));

const DashboardAssessment = () => {
  const classes = useStyles();

  return (
    <DashboardLayout>
      {/* <Container> */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <p> Assessment</p>
      </main>
      {/* </Container> */}
    </DashboardLayout>
  );
};

export default DashboardAssessment;

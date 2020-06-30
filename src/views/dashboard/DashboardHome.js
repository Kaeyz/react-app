import React from "react";
import DashboardLayout from "../../components/layouts/dashboardLayout/DashboardLayout";
import { makeStyles } from "@material-ui/core/styles";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import GetStartedCard from "../../components/dashboard/GetStartedCard";
import LeaderboardCard from "../../components/dashboard/LeaderboardCard";
// import Container from '../../components/common/Container';
import Grid from "@material-ui/core/Grid";

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
    // padding: theme.spacing(3),
    padding: "2rem",
  },
}));

const DashboardHome = () => {
  const classes = useStyles();

  return (
    <DashboardLayout>
      <main className={classes.content}>
        <WelcomeBanner />
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <GetStartedCard/>
          </Grid>
          <Grid item xs={6}>
            <LeaderboardCard />
          </Grid>
        </Grid>
      </main>
    </DashboardLayout>
  );
};

export default DashboardHome;
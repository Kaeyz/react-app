// modules
import React from "react";
import styled from "styled-components";
import MonoBlog from "./MonoBlog.js";
//import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
}));

const Wrapper = styled.div``;

const card = {
  title: "Healthy Living",
  description:
    "Using our algorithm, we carry out a preliminary assessment to understand the state of your health and determine how best to serve you!",
};

export default function BLogPagination() {
  const classes = useStyles();
  return (
    <Wrapper>

      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <MonoBlog color="green" data={card} />
          </Grid>
          <Grid item xs={4}>
            <MonoBlog color="green" data={card} />
          </Grid>
          <Grid item xs={4}>
            <MonoBlog color="green" data={card} />
          </Grid>

          <Grid item xs={4}>
            <MonoBlog color="green" data={card} />
          </Grid>
          <Grid item xs={4}>
            <MonoBlog color="green" data={card} />
          </Grid>
          <Grid item xs={4}>
            <MonoBlog color="green" data={card} />
          </Grid>
        </Grid>
      </div>
    </Wrapper>
  );
}

BLogPagination.propTypes = {
  //TODO: blog prop types goes here
};

// modules
import React from "react";
import styled from "styled-components";
import MonoBlog from "./MonoBlog.js";
//import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../common/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Wrapper = styled.div`
  text-align: center;
  background: rgba(46, 196, 182, 0.05);
  border: 0.1rem solid rgba(46, 196, 182, 0.3);
  border-radius: 0.5rem;
  .blog-content {
    padding: 3rem 0rem 10rem 0rem;
    display: grid;
    grid-gap: 3rem;
  }
  .blog-cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const card = {
  title: "Healthy Living",
  description:
    "Using our algorithm, we carry out a preliminary assessment to understand the state of your health and determine how best to serve you!",
};

export default function LatestBlog() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Wrapper>
        <Container>
          <div className="blog-content">
            <h2>Our Blog</h2>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <MonoBlog color="green" fontColor="black" data={card} />
              </Grid>
              <Grid item xs={4}>
                <MonoBlog color="green" fontColor="black" data={card} />
              </Grid>
              <Grid item xs={4}>
                <MonoBlog color="green" fontColor="black" data={card} />
              </Grid>
            </Grid>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
}

LatestBlog.propTypes = {
  //TODO: blog prop types goes here
};

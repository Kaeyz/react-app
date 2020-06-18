import React, { useState } from "react";
import AuthFormLayout from "./AuthFormLayout";
import {
  TextInput,
  SelectInput,
  DateInput,
  PasswordInput,
} from "../../common/inputs";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
// import Button from "../../common/Button";
//import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
      width: "60ch",
    },
  },
}));

const textInput = {
  placeholder: "Type here...",
};

const option = [
  { value: "Male", text: "Male" },
  { value: "Female", text: "Female" },
];

const Wrapper = styled.div`
  .submit {
    margin-top: 1.6rem;
    display: flex;
    justify-content: center;
  }
`;

function IndividualSignUpForm() {
  const classes = useStyles();

  return (
    <AuthFormLayout
      title="Create an Account"
      description="Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere."
    >
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextInput
              placeholder={textInput.placeholder}
              label="Enter your first name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput
              placeholder={textInput.placeholder}
              label="Enter your last name"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SelectInput label="Gender" options={option} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DateInput label="Date of Birth" />
          </Grid>
        </Grid>
      </form>
    </AuthFormLayout>
  );
}

//IndividualSignUpForm.propTypes = {}

export default IndividualSignUpForm;

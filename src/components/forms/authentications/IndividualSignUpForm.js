// eslint-disable-next-line
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
import Button from "../../common/Button";
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

const optionSex = [
  { value: "Male", text: "Male" },
  { value: "Female", text: "Female" },
];
const optionWeight = [
  { value: "50", text: "50" },
  { value: "70", text: "70" },
];
const optionHeight = [
  { value: "102", text: "102" },
  { value: "33", text: "33" },
];
const optionActivity = [
  { value: "Basic", text: "Basic" },
  { value: "Intermediate", text: "Intermediate" },
  { value: "Advanced", text: "Advanced" },
];

// eslint-disable-next-line
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
            <SelectInput label="Gender" options={optionSex} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DateInput label="Date of Birth" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectInput label="Weight" options={optionWeight} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectInput label="Height" options={optionHeight} />
          </Grid>
          <Grid item xs={12}>
            <SelectInput label="Activity Level" options={optionActivity} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PasswordInput label="Enter your password" />
            <p style={{ fontSize: "12px", lineHeight: "16px", marginTop:"13px" }}>
              Your password needs to be at least 8 characters long.
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PasswordInput label="Re-enter your password" />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        <div className="submit">
          <Button
            value="Sign Up"
            type="submit"
            theme="yellow"
            style={{ width: "100%" }}
          >
            SIGN UP
          </Button>{" "}
        </div>
      </form>
    </AuthFormLayout>
  );
}

//IndividualSignUpForm.propTypes = {}

export default IndividualSignUpForm;

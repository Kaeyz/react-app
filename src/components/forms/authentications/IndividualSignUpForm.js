import React from "react";
import AuthFormLayout from "./AuthFormLayout";
//import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";
import { TextInput } from "../../common/inputs/TextInput";
import Grid from "@material-ui/core/Grid";
import { SelectInput } from "../../common/inputs/SelectInput";
import { DateInput } from "../../common/inputs/DateInput";
// import TextField from '@material-ui/core/TextField';

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
  placeholder: "Tyoe here...",
};

const option = [
  { value: "Male", text: "Male" },
  { value: "Female", text: "Female" },
];

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

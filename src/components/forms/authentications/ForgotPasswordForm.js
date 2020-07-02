import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import { TextInput, SelectInput } from "../../../components/common/inputs";
import { Grid } from "@material-ui/core";

const Wrapper = styled.div``;

function ForgotPasswordForm() {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <TextInput
            label="Enter your email address"
            // value={email}
            type="email"
            // onChange={setUsername}
            placeholder="Type here..."
            // error={errors.username}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <SelectInput
            label="Account Type"
            // value= {accountType}
            // onChange={setAccountType}
            options={[{ value: "", text: "Select here" }]}
          />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

// ForgotPasswordForm.propTypes = {

// }

export default ForgotPasswordForm;

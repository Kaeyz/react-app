
import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import { TextInput, SelectInput } from "../../components/common/inputs";
import { Grid } from "@material-ui/core";
import CommonAuthPaperPage from "../../components/forms/authentications/CommonAuthPaperPage";
import Frame from "../../assets/Frame.svg";

const Wrapper = styled.div`
  hr {
    border: 1px solid #f0f1f3;
  }
`;
function ForgotPassword() {
  return (
    <Wrapper>
      {" "}
      <CommonAuthPaperPage
      img={Frame}
      alt={"frame"}
        title={"Forgot your password?"}
        detail={
          "Enter email address associated with your account."
        }
        buttonText={"SEND RESET LINK"}
        
      >
     
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
      </CommonAuthPaperPage>
    </Wrapper>
  );
}

// ForgotPassword.propTypes = {

// }

export default ForgotPassword;

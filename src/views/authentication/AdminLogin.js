import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import { TextInput, PasswordInput } from "../../components/common/inputs";
import { Grid } from "@material-ui/core";
import CommonAuthPaperPage from "../../components/forms/authentications/CommonAuthPaperPage";

const Wrapper = styled.div`
  hr {
    border: 1px solid #f0f1f3;
  }
`;
function AdminLogin() {
  return (
    <Wrapper>
      {" "}
      <CommonAuthPaperPage
        title={"Admin Portal"}
        detail={
          "Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere."
        }
        buttonText={"SIGN UP"}
      >
        {/* <hr /> */}
        <Grid container>
          <Grid item xs={12} sm={12}>
            <TextInput
              label="Enter your username"
              // value={username}
              type="username"
              // onChange={setUsername}
              placeholder="Type here..."
              // error={errors.username}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <PasswordInput
              label="Enter your Password"
              // value={password}
              // onChange={setPassword}
              // options={[{ value: "", text: "Select here" }]}
              // error={errors.password}
            />
          </Grid>
        </Grid>
      </CommonAuthPaperPage>
    </Wrapper>
  );
}

// AdminLogin.propTypes = {

// }

export default AdminLogin;

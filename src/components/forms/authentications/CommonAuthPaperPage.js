import React from "react";
// import PropTypes from 'prop-types'
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Container from "../../common/Container";
import Button from "../../common/Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: -webkit-fill-available;
  margin-top: 3rem;
  .paper {
    padding: 8.6rem;
    width: 65rem;
    height: auto;
    position: relative;

    h1 {
      text-align: center;
      font-size: 3rem;
      line-height: 3.2rem;
      margin-bottom: 2.7rem;
    }
    p {
      text-align: center;
      width: 41.9rem;
      margin: auto;
      font-size: 1.2rem;
      line-height: 2.4rem;
    }
  }
  hr {
    border: 1px solid #f0f1f3;
  }
  .submit {
    margin-top: 2.6rem;
    height: 4.8rem;
    Button {
      height: 4.8rem;
    }
  }
  img {
    position: absolute;
    top: -64px;
    right: 36%;
    z-index: 2;
  }
`;
function CommonAuthPaperPage({ children, ...props }) {
  return (
    <Wrapper>
      <Container>
        <Paper className="paper" elevation={3}>
          <img src={props.img} alt={props.alt} />
          <h1>{props.title}</h1>
<hr/>
          <p>{props.detail}</p>

          {children}
          <div className="submit">
            <Button theme="darkGreen" style={{ width: "100%" }}>
              {props.buttonText}
            </Button>
          </div>
        </Paper>
      </Container>
    </Wrapper>
  );
}

// CommonAuthPaperPage.propTypes = {

// }

export default CommonAuthPaperPage;

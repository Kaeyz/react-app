import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import MealLayout from "../../components/layouts/dashboardLayout/MealLayout";
import MealModal from "../../components/dashboard/meals/MealModal";

const Wrapper = styled(Paper)`
  .withNull {
    display: grid;
    align-items: center;
    grid-template-columns: max-content 1fr;
    padding-bottom: 4rem;
    #disclaimer {
      vertical-align: bottom;
      padding-right: 5px;
    }
    h1 {
      padding-right: 2rem;
      font-weight: normal;
      font-size: 1.6rem;
      line-height: 1.5rem;
      letter-spacing: -0.2px;
      color: ${(props) => props.theme.color.ui_06};
    }
    .null {
      border: 1px solid rgba(214, 216, 211, 0.5);
      margin: 10px 0px;
      width: 95%;
      height: 1px;
    }
  }
`;
// function index() {
class index extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <Wrapper>
        <MealLayout nullText="Welcome to Meal Planning">
          <div className="text">
            <p>
              Any information is confidential to you and Choose Life. Choose
              Life does not share this information with your employer. This
              information is strictly to give you an assessment of where your
              health is, and we use this information in recommending active
              lifestyle choices.
            </p>

            <p>
              Our aim is to help you live your best lives, taking into
              consideration, your wellbeing and taking the right steps to help
              you Choose Life, one day at a time.
            </p>
          </div>
          <MealModal />
        </MealLayout>
      </Wrapper>
    );
  }
}
// index.propTypes = {

// }

export default index;

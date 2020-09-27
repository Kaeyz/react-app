import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Modal from "../../dashboard/common/Modal";
import Grid from "@material-ui/core/Grid";
import Button from "../../common/Button";
import SelectInput from "../../../components/hra_input/inputs/SelectInput";

const Wrapper = styled.div`
  .pd {
    padding: 4rem 0;
    button {
      width: 100% !important;
    }
  }
`;
const optionMeals = [
  { label: "Beef", id: "isSelected" },
  { label: "Fish" },
  { label: "Shrimp" },
  { label: "Turkey" },
  { label: "Pork" },
  { label: "Chicken" },
];

class MealModal extends React.Component {
  state = {
    show: false,
    meals: "",
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  setMeals = (e) => {
    this.setState({ meals: e.target.value });
  };

  render() {
    return (
      <Wrapper>
        {/* <Modal show={this.state.show} handleClose={this.hideModal} textBtn='Complete' heading={<><img src={close} alt="adornment" id='adorn'/> <span> Questions on Protein</span></>} info='A balanced diet lorem ipsum blished fact that a reader will be distracted by the readable content.'> */}
        {/* THE COMMENTED CODE ABOVE IS IF THE HEADING TEXT IS GOING TO HAVE AN IMAGE BY ITS SIDE */}
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          heading={<span> Questions on Protein</span>}
          info="A balanced diet lorem ipsum blished fact that a reader will be distracted by the readable content."
        >
          <div className="select">
            <h1 className="bold">
              Select the options you’ll like to include in your meal plan?
            </h1>
            <div className="select-input">
              <SelectInput
                value={this.state.meals}
                options={optionMeals}
                grid="grid"
                onChange={this.state.setMeals}
              />
            </div>

            <Grid container className="select-input">
              <Grid item xs={12} className="pd">
                <Button theme="darkGreen" text="Complete" />
              </Grid>
            </Grid>
          </div>
        </Modal>
        <Grid item xs={12} sm={4} className="btn">
          <Button
            onClick={this.showModal}
            theme="darkGreen"
            text="Customise your meal plan"
          />
        </Grid>
      </Wrapper>
    );
  }
}

MealModal.propTypes = {};

export default MealModal;

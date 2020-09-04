import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";
import DashboardLayout from "../../components/layouts/dashboardLayout/DashboardLayout";
import FilterSearchLayout from "../../components/layouts/FilterSearchLayout";
import Table from "../../components/dashboard/common/Table";
import { tableConstants5 } from "../../components/dashboard/exercise/tableConstant5";
import { data4 } from "../../components/dashboard/exercise/mockData4";
import back from "../../assets/greenBackArrow.svg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  #back {
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: ${(props) => props.theme.color.brand_02};
    padding-right: 1rem;
    img {
      padding-right: 0.5rem;
    }
  }
`;
function PendingInvites() {
  return (
    <Wrapper>
      <DashboardLayout whatPage="Employees">
        <FilterSearchLayout
          text={
            <>
              <Link to="/employees">
                <p id="back">
                  {" "}
                  <img src={back} alt="go-back" />
                  Back
                </p>
              </Link>{" "}
              <span>Pending Invites</span>
            </>
          }
          display="none"
        >
          <Table cols={tableConstants5()} data={data4} />
        </FilterSearchLayout>
      </DashboardLayout>
    </Wrapper>
  );
}

PendingInvites.propTypes = {};

export default PendingInvites;

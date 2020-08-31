import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import MealLayout from '../../components/layouts/dashboardLayout/MealLayout';
import Table from '../../components/dashboard/common/Table';
import { data } from '../../components/dashboard/meals/mockMealData';
import { tableConstants } from '../../components/dashboard/meals/tableConstant';
import left from '../../assets/btn_ChevronLeft.svg'
import right from '../../assets/btn_ChevronRight.svg'
const Wrapper = styled(Paper)`
.withNull{
    display: grid;
    align-items: center;
    grid-template-columns: max-content 1fr;
    padding-bottom: 4rem;
    #disclaimer{
        vertical-align: bottom;
    padding-right: 5px;
    }
    h1{
        padding-right: 2rem;
        font-weight: normal;
font-size: 1.6rem;
line-height: 1.5rem;
letter-spacing: -0.2px;
color:${props => props.theme.color.ui_06};
    }
    .null {
        border: 1px solid rgba(214, 216, 211, 0.5);
        margin: 10px 0px;
        width: 95%;
        height: 1px;
    }
}
.pagination-ctrl{
    align-items: center;
    justify-content: start;
    padding-bottom: 5rem;
    span{
        font-weight: bold;
font-size: 1.6rem;
line-height: 2.4rem;
padding: 0 1.6rem;
text-align: center;
letter-spacing: 0.1px;
color: ${props => props.theme.color.text_05};
    }
}
`
function MealPlans() {
    return (
        <Wrapper>
                 <MealLayout nullText="Your Meal Plans">
                 <Table cols={tableConstants()} data={data} />
                 <div className="pagination-ctrl flex">
                     <img src={left} alt="left"/>
                     <span>Week 4</span>
                     <img src={right} alt="right"/>
                 </div>
                 </MealLayout>
        </Wrapper>
    )
}

MealPlans.propTypes = {

}

export default MealPlans;


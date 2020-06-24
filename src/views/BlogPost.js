import React from "react";
import AppLayout from "../components/layouts/appLayout/AppLayout";
// import styled from 'styled-components';
import BlogPagination from "../components/blog/BlogPagination";
import Box from "@material-ui/core/Box";
import MonoBlog from "../components/blog/MonoBlog";
import styled from "styled-components";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";

const Wrapper = styled.div`
.subscribeInputs{
	margin-bottom: 1.7rem;
}
.subscribeInputs{
	input{
		background: #EEEDED;
		border-radius: 5px;
		padding: 1rem 1.5rem;
		border:none;
		height: 4.8rem;
		outline: none;
		&::placeholder {
			color: rgba(96, 97, 97, 0.5)
			font-size: 1.4rem;
			font-family:"Matteo";
			line-height: 2.4rem;}
		}
		
		[type=email] {
            width: 30.4rem;			max-width:100%;
        }
        .info{
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 1.7rem;
            color: ${(props) => props.theme.color.text_01};
        }
}
`;
const card = {
  title: "Healthy Living",
  description:
    "Using our algorithm, we carry out a preliminary assessment to understand the state of your health and determine how best to serve you!",
};

const optionActivity = [
  { value: "LIFESTYLE", text: "Lifestyle" },
  { value: "NUTRITION", text: "Nutrition" },
  { value: "FITNESS", text: "Fitness" },
  { value: "HEALTH", text: "Health" },
];
function BlogGrid() {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <AppLayout>
      <Wrapper>
        <div style={{ width: "100%" }}>
          <Box display="flex" p={1}>
            <Box p={1}>
              <MonoBlog color="green" data={card} />
            </Box>
            <Box p={1}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                options={optionActivity}
                value={age}
                onChange={handleChange}
              />{" "}
              <p className="info">Subscribe to our Blog</p>
              <div className="subscribeInputs">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <Link to="/onboarding/individual">
                <Button value="Subscribe" theme="yellow">
                  {" "}
                  Subscribe
                </Button>
              </Link>
            </Box>{" "}
          </Box>
        </div>
        <BlogPagination />
      </Wrapper>
    </AppLayout>
  );
}

export default BlogGrid;

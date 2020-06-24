import React from "react";
import AppLayout from "../components/layouts/appLayout/AppLayout";
// import styled from 'styled-components';
import BlogPagination from "../components/blog/BlogPagination";
import Box from "@material-ui/core/Box";
import blogBg from "../assets/largeBlogImg.svg";
import styled from "styled-components";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "../components/common/Container";
import { Card, CardContent } from "@material-ui/core";

const Wrapper = styled.div`
margin: 8rem;
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
#demo-simple-select-label{
  // font-size: 16px;
  // line-height: 24px;
  color: ${(props) => props.theme.color.text_02};
  font-family:"Matteo";

}
.sub-head{
  color: ${(props) => props.theme.color.text_01};

}
`;

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: "2.55rem",
    width: "100%",
    minWidth: 120,
  },
}));

const categories = ["Lifestyle", "Health", "Fitness", "Nutrition"];

function BlogGrid() {
  const classes = useStyles();

  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <AppLayout>
      <Wrapper>
        <Container>
          <div className="sub-head">
            <p
              style={{
                fontSize: "3rem",
                lineHeight: "3.2rem",
                fontWeight: 600,
              }}
            >
              The Choose Life Blog
            </p>
            <p
              style={{
                fontSize: "1.6rem",
                lineHeight: "2.4rem",
                margin: "2.4rem 0rem",
              }}
            >
              The Wellness Blog
            </p>
          </div>
          <div style={{ width: "100%", padding: 0 }}>
            <Box
              display="flex"
              justifyContent="center"
              style={{ padding: 0 }}
              p={1}
            >
              <Box p={1} flexGrow={1}>
                <Card className="blog_card">
                  <div className="img_div">
                    <img src={blogBg} alt="blog bg" className="blog_img" />
                  </div>
                  <CardContent className={`card_content`}>
                    <h2>Healthy Living</h2>
                    <p className="card_description">
                      Using our algorithm, we carry out a preliminary assessment
                      to understand the state of your health and determine how
                      best to serve you!
                    </p>
                    <div className="card_footer">
                      <p>WELLNESS</p>
                    </div>
                  </CardContent>
                </Card>
              </Box>
              <Box p={1}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Explore by Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={handleChange}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

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
        </Container>
      </Wrapper>
    </AppLayout>
  );
}

export default BlogGrid;

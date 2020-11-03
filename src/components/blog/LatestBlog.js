/*eslint-disable */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../common/Button";
import blogBg from "../../assets/wellnessNav/check-up-dentist-doctors.svg";
import { Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBlogs } from "../../store/actions/blogActions";
import Container from "../../components/common/Container";

const Wrapper = styled.div`
  background: rgba(46, 196, 182, 0.05);
  border: 0.1rem solid rgba(46, 196, 182, 0.3);
  border-radius: 0.5rem;
  .grid-container {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  .blog_card {
    background: rgba(0, 0, 0, 0.03);
    min-width: 30rem;
    max-width: 100%;
    height: 550px;
    margin-top: 3rem;
  }
  .img_div {
    width: 100%;
    max-height: 30rem;
  }
  .blog_img {
    width: 100%;
    height: 100%;
  }
  .blog-content {
    padding: 3rem 0rem 10rem 0rem;
    display: grid;
    justify-content: center;
    text-align: center;
  }
  .card_content {
    text-align: start;
    background: ${(props) => props.theme.color.brand_02};
    margin-top: -0.9rem;
    color: #fff;
    height: 100%;
  }
  .card_description {
    font-size: 1.1rem;
  }
  .card_footer {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .test_link {
    text-decoration: underline;
    color: ${(props) => props.theme.color.ui_01};
  }
`;

function LatestBlog({ tryTest, getBlogs, isLoading, blogs, color }) {
  React.useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  const displayTest = () => {
    return (
      <Link className="test_link" to="/">
        Try the test
      </Link>
    );
  };

  const size = 3;
  const items = blogs.slice(0, size);

  return (
    <div>
      <Wrapper>
        <Container>
          <div className="blog-content">
            <h2>Our Blog</h2>
            <div className="grid-container">
              {isLoading ? (
                <div>Loading ...</div>
              ) : items.length !== 0 ? (
                items.map(({ id, title, body, asset }) => {
                  return (
                    <div className="grid-item" key={id}>
                      <Card className="blog_card">
                        <div className="img_div">
                          {isLoading ? (
                            <div>Loading ...</div>
                          ) : asset !== null ? (
                            <img
                              src={asset.url}
                              alt={asset.name}
                              className="blog_img"
                            />
                          ) : (
                            <img
                              src={blogBg}
                              alt="blog bg"
                              className="blog_img"
                            />
                          )}
                        </div>
                        <CardContent className={"card_content green_card"}>
                          <h2>{title}</h2>
                          <p className="card_description">{body}</p>
                          <div className="card_footer">
                            {tryTest && displayTest()}
                            <Link to="/blogPost">
                              <Button
                                value="Read More"
                                theme="greenBtn"
                                style={{
                                  boxShadow:
                                    "0px 4px 4px rgba(46, 196, 182, 0.25)",
                                }}
                              >
                                {" "}
                                Read More
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })
              ) : (
                <p>No blogs loaded yet</p>
              )}
            </div>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
}

LatestBlog.defaultProps = {
  tryTest: true,
};

LatestBlog.propTypes = {
  tryTest: PropTypes.bool,
  color: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  getBlogs: PropTypes.func.isRequired,
  blogs: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  const { blogs, isLoading } = state.blog;
  return { blogs: blogs || [], isLoading };
};

export default connect(mapStateToProps, { getBlogs })(LatestBlog);

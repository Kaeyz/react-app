/*eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Container from "../../components/common/Container";
import styled from "styled-components";
import AppLayout from "../../components/layouts/appLayout/AppLayout";
import Slider from "../../components/blog/Slider";
import spread from "../../assets/woman-spreading-both-her-arms.svg";
import img2 from "../../assets/boyStretch.png";
import { getSingleBlog, getBlogs } from "../../store/actions/blogActions";
import Header from "../../components/layouts/appLayout/header/index2";

const Wrapper = styled.div`
  text-align: center;
  padding-top: 103px;
  margin-bottom: 7rem;
  .headP {
    font-size: 4rem;
    line-height: 3.2rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.color.text_01};
	padding: 3rem 0 0 0;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
		font-size: 3rem;
	  }
  }
  .author {
    color: ${(props) => props.theme.color.text_12};
    font-size: 2.1rem;
    line-height: 2rem;
  }
  .grid-container {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  .blog_img {
    width: 100%;
    height: 100%;
  }
  .tag-date {
    margin-top: 1rem;
    justify-content: space-between;
  }
  .date {
    color: ${(props) => props.theme.color.text_02};
  }
  .tag {
    line-height: 23.94px;
    font-size: 1.5rem;
    font-weight: 100;
    width: fit-content;
    padding: 3px 20px;
    color: ${(props) => props.theme.color.text_03};
    font-family: Segoe UI emoji;
  }
  #yellow {
    background-color: rgba(247, 194, 54, 0.8);
  }

  .card_description {
    font-size: 1.1rem;
  }
  .longDetail,
  .detail {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${(props) => props.theme.color.text_02};
    font-weight: 300;
    margin: 4rem 0 6rem 0;
    margin: 4rem 0 ;
    text-align: left;
  }
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.4rem;
  }
  
  .orangeP {
    font-size: 1.4rem;
    line-height: 2.4rem;
    letter-spacing: 0.075rem;
    display: flex;
    margin-top: 1.5rem;
  }
  .detailbg {
    background: url(${spread});
    height: 424px;
	margin: 2rem 0 0rem 0;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
		background-position: center;
	}
  }
  .img2 {
	background: url(${img2});
	background-size: cover;
	background-position: center;
	height: 300px;
	margin: auto;
	width: 70%;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
				width: 100%;
	  }
  }
  .img-cap {
    font-style: italic;
    font-weight: 500;
    font-size: 2rem;
    line-height: 3.7rem;
    color: ${(props) => props.theme.color.ui_text_08};
	margin-top: 2rem;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		font-size: 1.6rem;
		line-height: 1.7rem;
	  }
  }
  .white_card {
    background-color: ${(props) => props.theme.color.ui_01};
    color: ${(props) => props.theme.color.text_05};
    .test_link {
      visibility: hidden;
    }
    button {
      color: ${(props) => props.theme.color.brand_02};
      background-color: ${(props) => props.theme.color.ui_text_01};
      border: 1px solid ${(props) => props.theme.color.brand_02};
      &:hover {
        background-color: ${(props) => props.theme.color.brand_02};
        transition: 0.2s;
      }
    }
  }
`;

function BlogPostDetail({
  match,
  getSingleBlog,
  getBlogs,
  blogs,
  blog,
  isLoading,
}) {
  const { blogId } = match.params;

  React.useEffect(() => {
    getSingleBlog(blogId);
    getBlogs();
  }, [blogId, getSingleBlog, getBlogs]);

  const { title, body, createdAt, tags } = blog;
  // const{id} = blogs;

  const reduced = blogs.reduce(function (filtered, option) {
    if (option.tags === tags && option.title !== title) {
      const someNewValue = {
        tags: option.tags,
        title: option.title,
        asset: option.asset,
        body: option.body,
        id: option.id,
      };
      filtered.push(someNewValue);
    }
    return filtered;
  }, []);

  const size = 3;
  const items = reduced ? reduced.slice(0, size) : "";

  return (
    <AppLayout header={<Header />}>
      <Wrapper>
        <Container>
          <div className="upper">
            <div className="sub-header">
              {/* <p className="headP">{title}</p> */}
              <p className="headP">Learning to Choose Wellness</p>
              <p className="author">Elijah Burton</p>
              <div className="tag-date flex">
                <p className="tag " id="yellow">
                  Nutrition
                </p>
                <p className="date">29 Aug 2019</p>
              </div>
              {/* <p className="orangeP">
                <img src={img} alt="img" />
                {!isLoading && tags ? tags.toUpperCase() : ""}
              </p> */}
              {/* <h4>
                Published on{" "}
                {!isLoading && createdAt
                  ? createdAt.split("T23:00:00.000Z")
                  : ""}
              </h4> */}
              {/* <h4>
                Published on{" "}
                {!isLoading && createdAt
                  ? createdAt.split("T23:00:00.000Z")
                  : ""}
              </h4> */}
            </div>
            <div>
              {isLoading ? (
                <div>Loading ...</div>
              ) : (
                <div className="detailbg"></div>
              )}
              <p className="img-cap">Image Caption / Description or Credits</p>
              {/* <p className="longDetail">{!isLoading && body}</p> */}
              <p className=" detail longDetail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                posuere posuere cursus quisque sodales. Tortor malesuada
                malesuada blandit sit sed egestas. Nunc consequat feugiat nunc,
                erat sed. Id consequat nulla posuere risus tincidunt gravida. Ac
                mi aliquet imperdiet turpis a, iaculis volutpat. Interdum sem ut
                eu aliquam sed ac dolor libero tempus. Vitae sit a, quis enim,
                neque consectetur fames quam. Egestas leo ultricies nulla sed
                aenean. Leo dolor ut gravida odio. Feugiat quis donec auctor
                commodo lacus. Imperdiet ultricies donec nisl, eget. Vestibulum,
                pellentesque proin facilisis tellus vitae a, scelerisque. Eget
                nulla praesent cursus ante eget augue sit fusce. Rhoncus morbi
                aliquam dui purus ut a. Venenatis neque molestie arcu duis
                lobortis orci volutpat egestas. In est in fringilla nulla
                interdum hac. Vitae enim velit morbi id. Dictumst est, egestas
                imperdiet nam nisi. Volutpat diam, risus convallis congue. Mi ut
                hendrerit blandit magna tincidunt mauris eget. Pulvinar a
                pellentesque tellus elementum, mauris. Nulla venenatis sagittis
                et aliquet. Vestibulum rutrum ultrices gravida tincidunt lectus
                at odio sollicitudin vivamus. Est, purus pharetra, sit non.
                Pellentesque ac placerat adipiscing nibh odio varius consectetur
                a feugiat. Varius pulvinar non enim, erat. Odio maecenas
                hendrerit libero leo praesent ipsum neque. Tincidunt libero
                elementum consequat.
              </p>
              <div className="img2"></div>
              <p className="img-cap">Image Caption / Description or Credits</p>
              <p className="detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                posuere posuere cursus quisque sodales. Tortor malesuada
                malesuada blandit sit sed egestas. Nunc consequat feugiat nunc,
                erat sed. Id consequat nulla posuere risus tincidunt gravida. Ac
                mi aliquet imperdiet turpis a, iaculis volutpat. Interdum sem ut
                eu aliquam sed ac dolor libero tempus. Vitae sit a, quis enim,
                neque consectetur fames quam. Egestas leo ultricies nulla sed
                aenean. Leo dolor ut gravida odio
              </p>
            </div>
          </div>
        </Container>
        <Slider />
      </Wrapper>
    </AppLayout>
  );
}

BlogPostDetail.defaultProps = {
  tryTest: true,
};

BlogPostDetail.propTypes = {
  match: PropTypes.object.isRequired,
  blog: PropTypes.object.isRequired,
  getSingleBlog: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getBlogs: PropTypes.func.isRequired,
  blogs: PropTypes.array.isRequired,
  id: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { blog, blogs, isLoading } = state.blog;
  return { blogs: blogs || [], blog, isLoading };
};

export default connect(mapStateToProps, { getBlogs, getSingleBlog })(
  withRouter(BlogPostDetail)
);

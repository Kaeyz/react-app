/* eslint-disable*/
import React, { useState } from "react";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import MonoBlog from "../../components/blog/MonoBlog";
import PropTypes from "prop-types";
import blogImg from "../../assets/girlRunning.png";

const Wrapper = styled.div`
  .grid-container {
    display: grid;
    justify-items: center;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
    }
    li {
      list-style-type: none;
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin: 5rem 0 4rem 0;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      padding-left: 0;
    }
  }
  .pagination li {
    list-style-type: none;
    padding: 15px 25px;
    font-family: Segoe UI;
    font-weight: normal;
    font-size: 1.7rem;
    line-height: 2.3rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      padding: 5px 15px;
    }
  }
  .pagination li:nth-child(3),
  .pagination li:nth-child(4),
  .pagination li:nth-child(5) {
    border-right: 1px solid ${(props) => props.theme.color.text_14};
  }
  .pagination li:nth-child(2),
  .pagination li:nth-child(6) {
    font-size: 1.3rem;
  }
  .pagination li a {
    color: ${(props) => props.theme.color.text_15};
  }
  .pagination li.active {
    background-color: ${(props) => props.theme.color.text_15};
  }
  .pagination li.active a {
    color: ${(props) => props.theme.color.text_03};
  }
`;
const PaginatedContent = ({ blogs, isLoading }) => {
  // Data to be rendered using pagination.
  const [activePage, setCurrentPage] = useState(1);
  const todos = blogs;
  const todosPerPage = 6;

  // Logic for displaying current todos
  const indexOfLastTodo = activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const renderTodos = currentTodos.map((todo, index) => {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // change date format
    var updatedAtMonth = todo.createdAt.slice(5, 7);
    var updatedAtDay = todo.createdAt.slice(8, 10);
    var updatedAtYear = todo.createdAt.slice(0, 4);
    var mlist = [];
    var month_name = function (dt) {
      mlist = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      return mlist[dt.getMonth()];
    };
    const published = `${updatedAtDay} ${month_name(
      new Date(`${updatedAtMonth}`)
    )} ${updatedAtYear}`;

    return isLoading ? (
      <div>Loading...</div>
    ) : (
      <MonoBlog
        key={index}
        to={`/blog/${todo.id}`}
        src={todo.asset !== null ? todo.asset.url : blogImg}
        title={todo.title}
        author={todo.author}
        createdAt={published}
        tag={capitalizeFirstLetter(todo.tags)}
        tagColor={
          todo.tags === "fitness"
            ? "yellow"
            : todo.tags === "nutrition"
            ? "blue"
            : todo.tags === "lifestyle"
            ? "orange"
            : todo.tags === "health"
            ? "green"
            : ""
        }
      />
    );
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Wrapper>
      <div className="result grid-container">{renderTodos}</div>
      <div className="pagination">
        <Pagination
          activePage={activePage}
          firstPageText=""
          lastPageText=""
          prevPageText={"Previous"}
          nextPageText={"Next"}
          itemsCountPerPage={6}
          totalItemsCount={todos.length}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
        />
      </div>
    </Wrapper>
  );
};

PaginatedContent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  blogs: PropTypes.array.isRequired,
};

export default PaginatedContent;

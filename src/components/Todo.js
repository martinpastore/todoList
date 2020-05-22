import React, { useContext } from "react";
import { TodosContext } from "../contexts/todo.context";
import { TOGGLE_TODO, REMOVE_TODO } from "../constants/actions";
import useStyles from "../styles/TodoStyles";
import styled from "styled-components";

const StyledSpan = styled.span`
  text-decoration: ${({ complete }) => (complete ? "line-through" : "")};
  color: ${({ complete, theme }) =>
    complete ? theme.colors.completeText : theme.colors.secondaryText};
`;

function Todo({ todo }) {
  const { dispatch } = useContext(TodosContext);
  const classes = useStyles();
  const { id, task, complete } = todo;
  return (
    <li
      className={classes.Todo}
      onClick={() => {
        dispatch({ type: TOGGLE_TODO, payload: id });
      }}
    >
      <StyledSpan complete={complete}>{task}</StyledSpan>
      <div className="icon">
        <i
          className="fas fa-trash"
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: REMOVE_TODO, payload: id });
          }}
        />
      </div>
    </li>
  );
}

export default Todo;

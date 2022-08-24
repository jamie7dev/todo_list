import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { removeTodo, changeTodo } from "../../redux/modules/Todo";
import { Link } from "react-router-dom"

function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <div className="todo-list-container">
      <div>
        <Link to={"detail/" + todo.id} className="todo-list-detail">Detail</Link>
        <h2 className="todo-list-title">{todo.title}</h2>
        <div className="todo-list-body">{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          Delete
        </button>
        <button
          className="todo-complete-button"
          onClick={() => dispatch(changeTodo(todo.id))}
        >
          {todo.isDone ? "Cancel" : "Done"}
        </button>
      </div>
    </div>
  );
}

export default Todo;

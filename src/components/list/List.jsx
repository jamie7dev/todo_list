import React from "react";
import Todo from "../todo/Todo";
import "./style.css";
import { useSelector } from "react-redux";

function List() {
  const todos = useSelector((state) => state.todos.todos );
  
  return (
    <div className="list-container">
      <h2 className="list-title">Mission</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Clear</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default List;

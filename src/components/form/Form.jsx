import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import {addTodo} from '../../redux/modules/Todo';

let number = 3;
function Form() {
  const dispatch = useDispatch();
  
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  

  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    dispatch(addTodo({...todo, id: number}));
    setTodo(initialState);
    number++;
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">Title</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input-title"
          onChange={onChangeHandler}
        />
        <label className="form-label">Content</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input-body"
          onChange={onChangeHandler}
        />
        <button className="add-button">Add</button>

      </div>
    </form>
  );
}

export default Form;

import Layout from '../components/layout/Layout.jsx';  
import {useState} from "react";

let num = 2;
const TodoList = () => {
    const [todos, setTodos] = useState([
        {
          id: 1,
          title: "title",
          content: "content",
          isDone: false
        },
        {
            id: 2,
            title: "React",
            content: "study",
            isDone: true
          },
      ]);

    const Addtodo = (title, content) => {
        return (num++, setTodos([...todos, { id: num, title: title, content: content, isDone:false }]));
    }

    const Done = (id) => {
        setTodos(todos.map(
            todo => todo.id === id
            ?{...todo, isDone: !todo.isDone}
            :todo
        ))
    }

    const Remove = (id) => {
        setTodos(todos.filter(
            todo => todo.id !== id
        ))
    }
    
    return (<Layout Addtodo={Addtodo} todos={todos} Done={Done} Remove={Remove}/>
    
    )
} 

export default TodoList;
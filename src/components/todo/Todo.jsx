import './style.css';


const Todo = ({todo, Remove, Done}) => {
    return (
        <div className="todo" key={todo.id}>
            <h3 className="todo_title">{todo.title}</h3>
            <p className="todo_content">{todo.content}</p>
            
            <button className='todo_btn' onClick={()=>Remove(todo.id)}>remove</button>
            <button className='todo_btn' onClick={()=>Done(todo.id)}>
                {todo.isDone===false?"done":"cancel"}</button>
        
        </div>
        
    )

}


export default Todo;




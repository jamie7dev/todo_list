import Todo from "../todo/Todo";

const List = ({todos, Done, Remove}) => {
    console.log(todos)
    return (
        <div className="todos-container">
            <p>Working...</p>
         {todos.map((todo)=>
            todo.isDone===false?
                <Todo todo={todo} Remove={Remove} Done={Done} key={todo.id}/>
            :null
         )
         }   
            <p>Done</p>

        {todos.map((todo) => (
            todo.isDone===true?
            <Todo todo={todo} Remove={Remove} Done={Done} key={todo.id}/>
            :null
        ))}
        </div>
    );
} 

export default List;
import Todo from "../todo/Todo";
import "./style.css"

const List = ({todos, Done, Remove}) => {
    console.log(todos)
    return (
        <div>
            <p className="working">Working</p>
            <div className="todos-container">            
                {todos.map((todo)=> 
                    todo.isDone===false?
                        <Todo todo={todo} Remove={Remove} Done={Done} key={todo.id}/>
                    :null
                )}   
                
            </div>
            <p className="done">Done</p>
            <div className="todos-container"> 
                {todos.map((todo) => 
                    todo.isDone===true?
                    <Todo todo={todo} Remove={Remove} Done={Done} key={todo.id}/>
                    :null
                )}
            </div>
        </div>
       
    );
} 

export default List;
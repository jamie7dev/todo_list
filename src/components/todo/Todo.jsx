const Todo = ({todo, Remove, Done}) => {
    return (
        <div className="todo" key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.content}</p>
            <button onClick={()=>Remove(todo.id)}>삭제하기</button>
            <button onClick={()=>Done(todo.id)}>
                {todo.isDone===false?"완료":"취소"}</button>
        </div>
        
    )

}


export default Todo;




/* action type */
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const CHANGE_TODO = "CHANGE_TODO";


/* action creator */
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};
export const removeTodo = (payload) => {
    return {
        type: REMOVE_TODO,
        payload,
    };
};
export const changeTodo = (payload) => {
    return {
        type: CHANGE_TODO,
        payload,
    };
};

/* initial state */
const initialState = {
    todos: [
        {
            id: 0,
            title: "리액트",
            body: "리액트를 배워봅시다",
            isDone: false,
          },
    ],
};

/* Reducer */
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload],
            };
        
        case REMOVE_TODO:
            return {
                //Aray.filter
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
        
        case CHANGE_TODO:
            return {
                //Aray.map
                todos: state.todos.map((todo) => {
                    return todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
                })
            };
        default:
            return state; 
    };
};

export default todos;
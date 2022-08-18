import "./style.css";
import {useState} from "react";

const Form = ({Addtodo}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="container">
            <input className="title"
            type="text"
            value={title}
            placeholder="title"
            onChange={(event) => {
            setTitle(event.target.value);
            }}
        />
        <input className="input_content"
            type="text"
            value={content}
            placeholder="content"
            onChange={(event) => {
            setContent(event.target.value);
            }}
        />
        <button className="Add_btn"
            onClick={() => {
                Addtodo(title, content);
            }}
        >
            Add
        </button>
        </div>
    )
} 

export default Form;
import {useState} from "react";

const Form = ({Addtodo}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="container">
            <input
            type="text"
            value={title}
            placeholder="제목"
            onChange={(event) => {
            setTitle(event.target.value);
            }}
        />
        <input
            type="text"
            value={content}
            placeholder="내용"
            onChange={(event) => {
            setContent(event.target.value);
            }}
        />
        <button
            onClick={() => {
                Addtodo(title, content);
            }}
        >
            추가하기
        </button>
        </div>
    )
} 

export default Form;
import React, { useState } from "react";

export function AddTodo(props) {
    const [todo, setTodo] = useState("");
    const onSubmit = event => {
        event.preventDefault();
        props.onSubmit(todo);
        setTodo('');
    };
    const onChange = event => {
        const { value } = event.target;
        setTodo(value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="newTodo" value={todo} onChange={onChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

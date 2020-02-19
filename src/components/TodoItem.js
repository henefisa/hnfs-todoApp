import React from "react";

export function TodoItem({ text, onClickDelete }) {
    return (
        <li>
            {text} <button onClick={onClickDelete}>Delete</button>
        </li>
    );
}

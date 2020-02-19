import React from "react";
import { connect } from "react-redux";

import { TodoItem } from "./TodoItem";

function TodoList({ todos, onClickDelete }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem {...todo} key={todo.id} onClickDelete={() => onClickDelete(index)}/>
            ))}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
} 

export default connect(mapStateToProps)(TodoList);

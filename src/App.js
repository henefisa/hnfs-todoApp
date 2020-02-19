import React from "react";
import { Provider } from "react-redux";

import { AddTodo } from "./components/AddTodo";
import TodoList from "./components/TodoList";

import store from "./stores/todoStore";
import { addTodo, removeTodo } from "./actions/todoActions";
function App() {
    return (
        <Provider store={store}>
            <div>
                <AddTodo
                    onSubmit={todo => {
                        store.dispatch(addTodo(todo));
                    }}
                />
                <TodoList onClickDelete={index => store.dispatch(removeTodo(index))}/>
            </div>
        </Provider>
    );
}

export default App;

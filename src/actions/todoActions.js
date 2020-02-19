import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from '../types/todoTypes';

export function addTodo(text){
    return {
        type: ADD_TODO,
        text
    }
}

export function editTodo(index, text){
    return {
        type: EDIT_TODO,
        index,
        text
    }
}

export function removeTodo(index){
    return {
        type: REMOVE_TODO,
        index
    }
}
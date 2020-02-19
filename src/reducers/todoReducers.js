import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../types/todoTypes";
let i = 0;
function todoReducers(state = [], action) {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    id: i++
                }
            ];
        }
        case EDIT_TODO: {
            return [
                ...state.slice(0, action.index),
                { text: action.text, completed: false },
                ...state.slice(action.index + 1)
            ];
        }
        case REMOVE_TODO: {
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        }
        default:
            return state;
    }
}

export default todoReducers;

import { Reducer } from "react";
import { TodoActionTypes, TodoActionUnionTypes } from "../actions/todo.actions";
import { Todo } from "../models/todo";


export interface TodosState {
    readonly todos: Todo[];
}
const initialState: TodosState = {
    todos: []
};


export const todosReducer: Reducer<TodosState, TodoActionUnionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        }
        case TodoActionTypes.REMOVE_TODO: {
            const id = action.payload.id;
            return {
                ...state,
                todos: state.todos.filter((todo) => id !== todo.id)
            }

        }
        case TodoActionTypes.UPDATE_TODO: {
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    const { id, desc } = action.payload;
                    return (todo.id === action.payload.id) ? { id: id, desc: desc } : todo;
                })
            };

        }

        default:
            return state;
    }
}

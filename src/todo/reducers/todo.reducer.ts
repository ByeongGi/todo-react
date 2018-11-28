import { TodoActionUnionTypes } from "../actions/todo.actions";
import { combineReducers } from "redux";
import { Todo } from "../models/todo";


export type TodosState = Readonly<{
    todos: Todo[];
}>;
export const todoReducer = (state = [], action: TodoActionUnionTypes) => {

};

import cuid from "cuid";
import { createAction } from "redux-actions";
import { ToDo } from "../models/todo";


export enum TodoActionTypes {
    ADD_TODO = '[TODO] ADD',
    REMOVE_TODO = '[TODO] REMOVE',
    UPDATE_TODO = '[TODO] UPDATE'
}

export const add = createAction<ToDo, string>(
    TodoActionTypes.ADD_TODO,
    (desc: string) => ({ id: cuid(), desc: desc })
);


export const remove = createAction(
    TodoActionTypes.REMOVE_TODO
);


export const update = createAction<ToDo, ToDo>(
    TodoActionTypes.UPDATE_TODO,
    ({ id, desc }) => ({ id: id, desc: desc })
);
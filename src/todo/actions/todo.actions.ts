import cuid from "cuid";
import { createAction } from "redux-actions";
import { Todo } from "../models/todo";


export enum TodoActionTypes {
    ADD_TODO = '[TODO] ADD',
    REMOVE_TODO = '[TODO] REMOVE',
    UPDATE_TODO = '[TODO] UPDATE'
}

export const add = createAction<Todo, string>(
    TodoActionTypes.ADD_TODO,
    (desc: string) => ({ id: cuid(), desc: desc })
);


export const remove = createAction<unknown>(
    TodoActionTypes.REMOVE_TODO
);


export const update = createAction<Todo, Todo>(
    TodoActionTypes.UPDATE_TODO,
    ({ id, desc }) => ({ id: id, desc: desc })
);


export type TodoActionUnionTypes = 
ReturnType<typeof add> 
| ReturnType<typeof remove> 
| ReturnType<typeof update>;
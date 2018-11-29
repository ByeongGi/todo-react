import cuid from "cuid";
import { createAction } from "redux-actions";
import { Todo } from "../models/todo";


export enum TodoActionTypes {
    ADD_TODO = '[TODO] ADD',
    REMOVE_TODO = '[TODO] REMOVE',
    UPDATE_TODO = '[TODO] UPDATE'
}
// Payload의 타입을 정의하고  payloadCreator 생성자 
export const add = createAction<Todo, string>(
    TodoActionTypes.ADD_TODO,
    (desc: string) => ({ id: cuid(), desc: desc })
);


export const remove = createAction<Todo, string>(
    TodoActionTypes.REMOVE_TODO,
    (id: string) => ({ id: id })
);


export const update = createAction<Todo, Todo>(
    TodoActionTypes.UPDATE_TODO,
    (todo) => todo
);


export type TodoActionUnionTypes =
    ReturnType<typeof add>
    | ReturnType<typeof remove>
    | ReturnType<typeof update>;
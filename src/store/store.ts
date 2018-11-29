import { combineReducers, createStore } from "redux";
import { todosReducer, TodosState } from "../todo/reducers/todo.reducer";

const rootReducer = combineReducers<{
    todoFeature : TodosState
}>({
    todoFeature: todosReducer
});



export default createStore(rootReducer);

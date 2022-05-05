import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./todo.action";

export const initialState = 0;

export const todoReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state)=> state = 0),
)
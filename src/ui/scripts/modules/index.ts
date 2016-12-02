import { combineReducers, ReducersMapObject, Reducer } from 'redux';
import increment, { IncrementReducer, IncrementState } from './increment';

export interface AllReducers extends ReducersMapObject {
    increment: IncrementReducer;
}

export interface RootState {
    increment: IncrementState;
}

export type RootReducer = Reducer<RootState>;

export default <RootReducer>combineReducers(<AllReducers>{increment});

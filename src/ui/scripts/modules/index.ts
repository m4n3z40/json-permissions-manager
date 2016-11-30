import { combineReducers, ReducersMapObject, Reducer, Store } from 'redux';
import increment, { IncrementState } from './increment';

export interface RootReducer extends ReducersMapObject {
    increment: Reducer<IncrementState>;
}

export interface RootStore {
    increment: IncrementState;
}

export default combineReducers({increment});

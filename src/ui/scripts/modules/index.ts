import { combineReducers, ReducersMapObject, Reducer } from 'redux';
import files, { FilesReducer, FilesState } from '../modules/files';

export interface AllReducers extends ReducersMapObject {
    files: FilesReducer;
}

export interface RootState {
    files: FilesState;
}

export type RootReducer = Reducer<RootState>;

export default <RootReducer>combineReducers(<AllReducers>{files});

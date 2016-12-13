import { Reducer, ActionCreator, Action } from 'redux';
import FileEntity from './FileEntity';

/**
 * ==========
 * Constants
 * ==========
 */

export const ADD = 'json-permissions-manager/files/ADD';


/**
 * ==========
 * Reducer
 * ==========
 */

export interface FilesState {
    files: FileEntity[];
    currentFileID: string | null;
}

export type FilesReducer = Reducer<FilesState>;

const INITIAL_STATE: FilesState = {
    files: [],
    currentFileID: null
};

export default <FilesReducer> ((
    state: FilesState = INITIAL_STATE,
    action: Action
): FilesState  => {
    switch (action.type) {
        case ADD:
        default:
            return state;
    }
});


/**
 * ==========
 * Actions
 * ==========
 */

export type AddFileAction = Action & FileEntity;

export interface AddFileActionCreator extends ActionCreator<AddFileAction> {
    (file: {name: string, path: string}): AddFileAction;
}

export const add: AddFileActionCreator = (file): AddFileAction => ({
    type: ADD,
    name: file.name,
    path: file.path
});

export interface FilesActionCreators {
    add: AddFileActionCreator;
}

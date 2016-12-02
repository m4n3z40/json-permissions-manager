import { Reducer, ActionCreator, Action } from 'redux';

export type IncrementActionCreator = ActionCreator<Action>;
export type DecrementActionCreator = ActionCreator<Action>;
export type ResetActionCreator = ActionCreator<Action>;

export interface IncrementActionCreators {
    increment: IncrementActionCreator;
    decrement: DecrementActionCreator;
    reset: ResetActionCreator;
};

export interface IncrementState {
    value: number;
}

export type IncrementReducer = Reducer<IncrementState>;

export const INCREMENT = 'permissions-manager/increment/INCREMENT';
export const DECREMENT = 'permissions-manager/increment/DECREMENT';
export const RESET = 'permissions-manager/increment/RESET';

const INITIAL_STATE: IncrementState = {
    value: 0
};

export default <IncrementReducer> ((
    state: IncrementState = INITIAL_STATE,
    action: Action = {type: null}
): IncrementState  => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {value: state.value + 1});
        case DECREMENT:
            return Object.assign({}, state, {value: state.value - 1});
        case RESET:
            return INITIAL_STATE;
        default:
            return state;
    }
});

export const increment: IncrementActionCreator = (): Action => ({
    type: INCREMENT
});

export const decrement: DecrementActionCreator = (): Action => ({
    type: DECREMENT
});

export const reset: ResetActionCreator = (): Action => ({
    type: RESET
});

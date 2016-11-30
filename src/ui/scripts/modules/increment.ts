import { Action } from 'redux';

export const INCREMENT = 'permissions-manager/increment/INCREMENT';
export const DECREMENT = 'permissions-manager/increment/DECREMENT';
export const RESET = 'permissions-manager/increment/RESET';

export interface IncrementState {
    value: number;
}

const INITIAL_STATE: IncrementState = {
    value: 0
};

export default function reducer(
    state: IncrementState = INITIAL_STATE,
    action: Action = {type: null}
): IncrementState {
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
}

export function increment(): Action {
    return { type: INCREMENT };
}

export function decrement(): Action {
    return { type: DECREMENT };
}

export function reset(): Action {
    return { type: RESET };
}

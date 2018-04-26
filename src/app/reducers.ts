import { Action } from './CommonModule/interfaces/Actions';

export const ACTIONS = {
    FREELANCERS_LOADED: 'FREELANCERS_LOADED',
}

export const freelancersReducer = ( state, action: Action) => {
    switch (action.type) {
        case ACTIONS.FREELANCERS_LOADED:
            return action.payload;
        default:
            return state;
    }
}

const combineReducer = {
    freelancers : freelancersReducer
};

export default combineReducer;
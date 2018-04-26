import { ActionReducer } from '@ngrx/store';
import { Action } from '../../../CommonModule/interfaces/Actions';


export const ACTIONS = {
    LOAD_ROLE_LIST : "role_list",
    ADD_ROLE : "role_add"
}


export interface RolesModel {
    id;
    name;
    description;
}

export const rolesReducer: ActionReducer<RolesModel[]> = (state : RolesModel[] = [], action: Action) => {
    switch (action.type) {
        case ACTIONS.LOAD_ROLE_LIST:           
            return action.payload;
        case ACTIONS.ADD_ROLE:
            return [...state, action.payload];
        default:
            return state;
    }
}



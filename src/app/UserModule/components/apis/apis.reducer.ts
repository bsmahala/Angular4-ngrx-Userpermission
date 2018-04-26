import { ActionReducer } from '@ngrx/store';
import { Action } from '../../../CommonModule/interfaces/Actions';


export const ACTIONS = {
    LOAD_APIS_LIST : "api_list",
    ADD_API : "add _api"
}


export interface ApiModel {
    id;
    uri;
    description;
}




export const apiReducer: ActionReducer<ApiModel[]> = (state : ApiModel[] = [], action: Action) => {
    switch (action.type) {
        case ACTIONS.LOAD_APIS_LIST:
           
            return action.payload;
        case ACTIONS.ADD_API:
            return [...state, action.payload];
        default:
            return state;
    }
}



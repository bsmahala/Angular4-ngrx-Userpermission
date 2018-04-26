import { ActionReducer } from '@ngrx/store';
import { Action } from '../../../CommonModule/interfaces/Actions';


export const ACTIONS = {
    LOAD_GENERICAPI_LIST : "generic_list"
}


export interface GenericApi {
    id;
    endpoint;
    sql;
    method;
    params;
}

export const genericapiReducer: ActionReducer<any> = (state = {}, action: Action) => {
    switch (action.type) {
        case ACTIONS.LOAD_GENERICAPI_LIST:           
            return action.payload;
        default:
            return state;
    }
}



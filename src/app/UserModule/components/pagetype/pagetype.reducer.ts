import { ActionReducer } from '@ngrx/store';
import { Action } from '../../../CommonModule/interfaces/Actions';


export const ACTIONS = {
    LOAD_PAGE_TYPE_LIST : "page_type_list",
    ADD_PAGE_TYPE : "add _page_type"
}


export interface PagetypeModel {
    id;
    name;
    description;
}

export const pagetypeReducer: ActionReducer<PagetypeModel[]> = (state : PagetypeModel[] = [], action: Action) => {
    switch (action.type) {
        case ACTIONS.LOAD_PAGE_TYPE_LIST:           
            return action.payload;
        case ACTIONS.ADD_PAGE_TYPE:
            return [...state, action.payload];
        default:
            return state;
    }
}



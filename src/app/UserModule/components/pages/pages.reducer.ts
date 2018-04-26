import { ActionReducer } from '@ngrx/store';
import { Action } from '../../../CommonModule/interfaces/Actions';


export const ACTIONS = {
    LOAD_PAGE_LIST : "page_list",
    ADD_PAGE : "add _page"
}


export interface PageModel {
    id;
    name;
    description;
}

export const pageReducer: ActionReducer<PageModel[]> = (state : PageModel[] = [], action: Action) => {
    switch (action.type) {
        case ACTIONS.LOAD_PAGE_LIST:
           
            return action.payload;
        case ACTIONS.ADD_PAGE:
            return [...state, action.payload];
        default:
            return state;
    }
}



import { Action as Ac, ActionReducer } from '@ngrx/store';


export interface  Action  extends Ac {
        payload?:any;
}
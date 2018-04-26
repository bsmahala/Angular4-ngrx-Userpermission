import { ActionReducer, combineReducers } from '@ngrx/store';
import { ApiModel, apiReducer } from './components/apis/apis.reducer';
import { PageModel, pageReducer } from './components/pages/pages.reducer';
import { PagetypeModel, pagetypeReducer } from './components/pagetype/pagetype.reducer';
import { RolesModel, rolesReducer } from './components/roles/roles.reducer';
import { GenericApi, genericapiReducer } from './components/genericapi/genericapi.reducer';


export interface UserModuleState {
  apis: ApiModel;
  pages: PageModel;
  pagetypes: PagetypeModel,
  roleReducer: RolesModel,
  genericapi: GenericApi
}

export function createReducer(asyncReducers = {}): ActionReducer<any> {
  return combineReducers(Object.assign({
    apis: apiReducer,
    pages: pageReducer,
    pagetypes: pagetypeReducer,
    roles: rolesReducer,
    genericapi: genericapiReducer
  }, asyncReducers));
}
const ds = createReducer();
export const userModuleReducer = ds;
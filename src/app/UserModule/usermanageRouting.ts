import { NgModule,Component } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';
import { PagesComponent } from './components/pages/pages.component';
import { PagetypeComponent } from './components/pagetype/pagetype.component';
import { ApisComponent } from './components/apis/apis.component';
import { PagepermissionComponent } from './components/pagepermission/pagepermission.component';
import { PageapiRelationComponentComponent } from './components/pageapi-relation-component/pageapi-relation-component.component';
import { RolesComponent } from './components/roles/roles.component';
import { GenericapiComponent } from './components/genericapi/genericapi.component';

import { Menu } from '../CommonModule/interfaces/menu';


@Component({
    selector: 'usermodule-root',
    template: `<router-outlet></router-outlet>`
  })
export class UserManagementRootComponent{

}




interface RoutesEx extends Route, Menu {
}

export const routes: RoutesEx[] = [
    {path: 'apis', component: ApisComponent, label : "Apis", icon: "fa fa-list"},
    {path: 'pagetype', component: PagetypeComponent, label : "Page Type", icon: "fa fa-tasks"},
    {path: 'pages', component: PagesComponent, label : "Pages", icon: "fa fa-list"},
    {path: 'pageapilink', component:PageapiRelationComponentComponent , label : "Page Api Link", icon: "fa fa-link"},
    {path: 'roles', component: RolesComponent, label : "Roles", icon: "fa fa-eye"},
    {path: 'pagepermission', component: PagepermissionComponent, label : "Page Permission", icon: "fa fa-lock"},
    {path: 'dynamicapis', component: GenericapiComponent, label : "Dynamic Apis", icon: "fa fa-asterisk"}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {}

export const routingComponents = [
    UserManagementRootComponent,
    PagesComponent,
    PagetypeComponent,
    ApisComponent,
    PagepermissionComponent,
    PageapiRelationComponentComponent,
    RolesComponent,
    GenericapiComponent
];
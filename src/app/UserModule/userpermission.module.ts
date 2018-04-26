import { CommonModule } from '@angular/common';
import { NgModule, Component, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { CommonModule as AppCommonModule } from '../CommonModule/common.module';
import { UserManagementRoutingModule, routingComponents} from './usermanageRouting';
import { userModuleReducer } from './reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,   
    AppCommonModule,
    UserManagementRoutingModule,
    StoreModule.forFeature('usermanagement', userModuleReducer)
  ],
  exports: [
    LoginComponent,
    routingComponents  
  ],
  providers: [],
  declarations: [
    LoginComponent,
    routingComponents
  ]
})
export class UserPermissionModule {


}

export {routingComponents} from './usermanageRouting';




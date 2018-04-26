import { CommonModule as AngCommpnModule } from '@angular/common';
import { NgModule, Component, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { FormerrorHandlerComponent } from './formerror-handler/formerror-handler.component';
import { Reactformsubmit } from './directives/reactformsubmit.directive'
import { HttpService } from './services/httpClient';
import { LocalStorageService } from './services/localstorage.serivce';
import { HttpClientModule } from '@angular/common/http';
import {AlertCenterModule} from 'ng2-alert-center';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ModalComponentComponent } from './modal-component/modal-component.component';



@NgModule({
  imports: [
    AngCommpnModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports: [
    FormerrorHandlerComponent,
    Reactformsubmit,
    ModalComponentComponent
  ],
  providers: [HttpService, LocalStorageService],
  declarations: [
    FormerrorHandlerComponent,
    Reactformsubmit,
    ModalComponentComponent
  ]
})
export class CommonModule {

}




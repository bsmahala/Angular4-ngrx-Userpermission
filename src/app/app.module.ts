import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { UserPermissionModule } from './UserModule/userpermission.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import reducers from './reducers';
import { AppComponent } from './app.component';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ContainerComponent } from './components/container/container.component';
import { NavbarComponent } from './common-components/navbar/navbar.component';
import { TopHeaderComponent } from './common-components/top-header/top-header.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginRouteGuard } from './services/auth-guard.service';
import { UserRegistrationComponent } from './common-components/user-registration/user-registration.component';
import { DepartmentComponent, Departm } from './components/department/department.component';
import { DesignationComponent } from './components/designation/designation.component';
import { TeamComponent } from './components/team/team.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './common-components/login/login.component';
import { CommonModule } from './CommonModule/common.module';
import {AlertCenterModule} from 'ng2-alert-center';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Alert, AlertCenterService, AlertType} from 'ng2-alert-center';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    TopHeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    UserRegistrationComponent,
    DepartmentComponent,
    DesignationComponent,
    TeamComponent,
    UserComponent,
    Departm,
    LoginComponent  
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forRoot(reducers),    
    Ng2AutoCompleteModule,
    AlertCenterModule,
    BrowserAnimationsModule, NoopAnimationsModule,
    AppRoutingModule,
    UserPermissionModule
  ],
  providers: [LoginRouteGuard, AlertCenterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

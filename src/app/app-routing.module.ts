import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { LoginRouteGuard } from './services/auth-guard.service';
import { LoginComponent } from './common-components/login/login.component';


const appRoutes: Routes = [{
  path: '',
  component: ContainerComponent,
  canActivate: [LoginRouteGuard],
  canActivateChild: [LoginRouteGuard],
  children: [{
      path: 'usermanagement',
      loadChildren: './UserModule/userpermission.module#UserPermissionModule'
    }
    ]
}, {
  path: 'login',
  component: LoginComponent,
}, {
  path: '**',
  redirectTo: ''
}]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

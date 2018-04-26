import { CanActivate, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../CommonModule/services/localstorage.serivce'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginRouteGuard implements CanActivateChild, CanActivate {

  constructor(private _router: Router, private _login: LocalStorageService) {}

  isLogin() {
      const loc = this;
      if(loc._login.isLogin()) {
        return true;
    }else {
      this._router.navigate(['/login']);
      return false;
  }
      // return new Promise<boolean>(resolve => {
      //         if(loc._login.isLogin()) {
      //           return true;
      //       }else {
      //         this._router.navigate(['/login']);
      //         return false;
      //     }
      // })
  }

  canActivateChild() {    
    return this.isLogin();
  }

  canActivate() {
    return this.isLogin();
  }
}

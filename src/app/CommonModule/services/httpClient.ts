import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { LocalStorageService } from './localstorage.serivce';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry, tap } from 'rxjs/operators';

import {Alert, AlertCenterService, AlertType} from 'ng2-alert-center';


const option = (token) => {
  let header = token ? {'Authorization': token} : {};
  
  return {        
        headers: new HttpHeaders({
          'Content-Type':  'application/json',           
          ...header
        }),
        observe: 'response' as 'body'
      };
  }



@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private _login: LocalStorageService , private _alert :AlertCenterService) { 
  }

  private handleError(error: HttpErrorResponse, _this, url) {
    if (error.error instanceof ErrorEvent) {      
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status} :  ${error.error.error}`, error);
        if(error.status === 0 || error.status === 404) {
          const msg = 'Api not available or network unreachable for : '+url;
          _this._alert.alert(new Alert(AlertType.DANGER, msg, "Error", 5000));
          return new ErrorObservable(msg);
        }
        
    }
    console.log(_this._alert)
    _this._alert.alert(new Alert(AlertType.DANGER, error.error.error, "Error", 5000));
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(error.error.error);
  };
  
  public setHeader(e:any, thiss) {    
    const h = e.headers.get("Authorization");
    if(h)
    thiss._login.setToken(h)
    return e;
  }

  get<T>(url) {

    return this.http.get<T>(url, option(this._login.getToken())).pipe(
      tap(e=>this.setHeader(e, this)),
      catchError(e=>this.handleError(e, this, url))
    ).map((e:any)=>{
      return e.body.result;
    })
  }

  post<T>(url, data) {
    return this.http.post<T>(url, data, option(this._login.getToken()))
    .pipe(
      tap(e=>this.setHeader(e, this)),
      catchError(e=>this.handleError(e, this, url))
    ).map((e:any)=>{
      return e.body.result;
    })
  }

  put<T>(url, data) {    
    return this.http.put<T>(url, data, option(this._login.getToken()))
    .pipe(
      tap(e=>this.setHeader(e, this)),
      catchError(e=>this.handleError(e, this, url))
    ).map((e:any)=>{
      return e.body.result;
    })
  }

  delete<T>(url, data) {    
    return this.http.delete<T>(url, option(this._login.getToken()))
    .pipe(
      tap(e=>this.setHeader(e, this)),
      catchError(e=>this.handleError(e, this, url))
    ).map((e:any)=>{
      return e.body.result;
    })
  }
}
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private loginData;
  private token;
  private loginDataKey="logindata";
  private tokenKey="token";
  constructor() {}

  removeAll(){
    localStorage.removeItem(this.loginDataKey);
    localStorage.removeItem(this.tokenKey);
    this.loginData = undefined;
    this.tokenKey = undefined;
  }

  isLogin() {
    this.getLoginData();
    this.getToken();
    if(this.loginData && this.token) {
      return true;
    }
    return false;
  }

  getLoginData() {
    if(this.loginData) {
      return this.loginData;
    }

    const data = localStorage.getItem(this.loginDataKey);
    if(data) {
      try {
        this.loginData = JSON.parse(atob(data));
      } catch (e) {
        console.error("Login data is not valid");
      }
    }
    return this.loginData;
  }

  setLoginData(data) {
    if(data) {
      this.loginData = data;
      try {
        localStorage.setItem(this.loginDataKey, btoa(JSON.stringify(data)));
      } catch (e) {
        console.error("Login data is not valid");
      }
    }
  }


  getToken() {
    if(this.token) {
      return this.token;
    }

    const data = localStorage.getItem(this.tokenKey);
    if(data) {
      try {
        this.token = atob(data);
      } catch (e) {
        console.error("token is not valid");
      }
    }
    return this.token;
  }

  setToken(data) {
    if(data) {
      this.token = data;
      try {
        localStorage.setItem(this.tokenKey, btoa(this.token));
      } catch (e) {
        console.error("token is not valid");
      }
    }
  }
}
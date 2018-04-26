import { Component, OnInit, OnChanges, Input, Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AbstractControl, FormArray,FormControl, FormBuilder, FormGroup,  Validator, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../CommonModule/services/localstorage.serivce';
import { HttpService } from '../../CommonModule/services/httpClient';
import { URLS } from '../constatns'

@Component({
  selector: 'allcad-usermodule-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {
  @Input()
  errorMessage;

  @Output()
  loginSuccess:EventEmitter<any>  = new EventEmitter();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _router: Router, private store: Store<null>, private http: HttpService, private local: LocalStorageService) {
  }

  ngOnChanges(){
  }  

  ngOnInit() {
      if(this.local.isLogin()) {
        this.loginSuccess.emit(this.local.getLoginData());
      }

      this.loginForm = this.fb.group({
        email : ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.min(5), Validators.max(10)])],
        remberMe: false
      })
  }


  login(d) {
    this.http.post(URLS.login, d).subscribe(e=>{
      console.log(e)  
      this.local.setLoginData(e);
      this.loginSuccess.emit(e);
    }, e=>console.log(e))
  }
}

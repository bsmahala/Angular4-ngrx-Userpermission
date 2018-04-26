import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserModuleState } from '../../reducers'
import { ACTIONS, ApiModel } from './apis.reducer'
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../CommonModule/services/httpClient';
import { URLS } from '../../constatns'
import {Alert, AlertCenterService, AlertType} from 'ng2-alert-center';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css']
})
export class ApisComponent implements OnInit {
  apiForm: FormGroup;
  apiList: ApiModel[];
  constructor(private fb: FormBuilder, private _store : Store<any>, private http: HttpService, private alert:AlertCenterService) {
    this._store.select(state=>state.usermanagement.apis).subscribe(e=>this.apiList=e);    
  }

  ngOnInit() {
    if(this.apiList.length <=0)
    this.http.get(URLS.apislist).subscribe(e=>{
     this._store.dispatch({ type : ACTIONS.LOAD_APIS_LIST, payload: e });
    })
    this.apiForm = this.fb.group({
      id: 0,
      uri: ['', Validators.required],
      description: ['', Validators.required]
    });
  }



  
  addApi(data: ApiModel){
    this.http.post(URLS.apisadd, data).subscribe(e=>{
      this.apiForm.reset();
     this._store.dispatch({ type : ACTIONS.ADD_API, payload: e });
    })
  }
}

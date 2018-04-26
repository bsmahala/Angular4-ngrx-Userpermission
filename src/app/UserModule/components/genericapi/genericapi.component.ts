import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserModuleState } from '../../reducers'
import { ACTIONS } from './genericapi.reducer'
import { Observable, Subscription } from 'rxjs';
import { HttpService } from '../../../CommonModule/services/httpClient';
import { URLS, root as RootUrl } from '../../constatns'
import {Alert, AlertCenterService, AlertType} from 'ng2-alert-center';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-genericapi',
  templateUrl: './genericapi.component.html',
  styleUrls: ['./genericapi.component.css']
})
export class GenericapiComponent implements OnInit {
  hint = "Ex: Select * from A as a where a.salary > {salary} and a.name like '%{name}%'";
  apiUrl = ""
  rootR = RootUrl +'genericapi/exec/';
  params = [];
  genericApiForm: FormGroup;
  genapiListObect;
  genList;
  constructor(private fb: FormBuilder, private _store : Store<any>, private http: HttpService, private alert:AlertCenterService) {
    this._store.select(state=>state.usermanagement.genericapi).subscribe(e=>{
      this.genapiListObect =e;     
      this.genList = Object.keys(e);
    });    
  }



  ngOnInit() {
    this.http.get(URLS.genericapilist).subscribe(e=>{
     this._store.dispatch({ type : ACTIONS.LOAD_GENERICAPI_LIST, payload: e });
    })
    

    this.genericApiForm = this.fb.group({
      id: 0,
      endpoint: ['', Validators.required],
      method: ['post', Validators.required],
      sql: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.genericApiForm.get('endpoint').valueChanges.subscribe(e=>{
      this.apiUrl = this.rootR +e
    });
    this.genericApiForm.get('sql').valueChanges.subscribe(e=>{
      this.onQueryChange(e)
    });
  }

  onQueryChange(e) {
    if(!e || e==null) {
      return;
    }
    const arra = [];
        e.replace(/\{(.*?)\}/g, function(match, param) { 
          arra.push({name:param, required: true});
          return '';
      });
    this.params = arra;
  }
  
  addGenericApi(data){
    data.params = this.params;
    this.http.post(URLS.genericapiadd, data).subscribe(e=>{
     this.genericApiForm.reset();
     this.params = [];
     this.apiUrl = ''
     this._store.dispatch({ type : ACTIONS.LOAD_GENERICAPI_LIST, payload: e });
    })
  }
}
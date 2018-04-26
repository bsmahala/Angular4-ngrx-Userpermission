import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserModuleState } from '../../reducers'
import { ACTIONS, RolesModel } from './roles.reducer'
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../CommonModule/services/httpClient';
import { URLS } from '../../constatns'
import {Alert, AlertCenterService, AlertType} from 'ng2-alert-center';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roleForm: FormGroup;
  roleList: RolesModel[];
  constructor(private fb: FormBuilder, private _store : Store<any>, private http: HttpService, private alert:AlertCenterService) {
    this._store.select(state=>state.usermanagement.roles).subscribe(e=>this.roleList =e);    
  }

  ngOnInit() {
    if(this.roleList.length <=0)
    this.http.get(URLS.rolesList).subscribe(e=>{
     this._store.dispatch({ type : ACTIONS.LOAD_ROLE_LIST, payload: e });
    })
    

    this.roleForm = this.fb.group({
      id: 0,
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  
  addPage(data: RolesModel){
    this.http.post(URLS.rolesadd, data).subscribe(e=>{
     this.roleForm.reset();
     this._store.dispatch({ type : ACTIONS.ADD_ROLE, payload: e });
    })
  }
}
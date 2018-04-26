import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserModuleState } from '../../reducers'
import { ACTIONS, PagetypeModel } from './pagetype.reducer'
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../CommonModule/services/httpClient';
import { URLS } from '../../constatns'
import {Alert, AlertCenterService, AlertType} from 'ng2-alert-center';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-pagetype',
  templateUrl: './pagetype.component.html',
  styleUrls: ['./pagetype.component.css']
})
export class PagetypeComponent implements OnInit {

  pageTypeForm: FormGroup;
  pagetypeList: PagetypeModel[];
  constructor(private fb: FormBuilder, private _store : Store<any>, private http: HttpService, private alert:AlertCenterService) {
    this._store.select(state=>state.usermanagement.pagetypes).subscribe(e=>this.pagetypeList =e);    
  }

  ngOnInit() {
    if(this.pagetypeList.length <=0)
    this.http.get(URLS.pagetypesList).subscribe(e=>{
     this._store.dispatch({ type : ACTIONS.LOAD_PAGE_TYPE_LIST, payload: e });
    })
    

    this.pageTypeForm = this.fb.group({
      id: 0,
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  
  addPage(data: PagetypeModel){
    this.http.post(URLS.pagetypesadd, data).subscribe(e=>{
     this.pageTypeForm.reset();
     this._store.dispatch({ type : ACTIONS.ADD_PAGE_TYPE, payload: e });
    })
  }
}
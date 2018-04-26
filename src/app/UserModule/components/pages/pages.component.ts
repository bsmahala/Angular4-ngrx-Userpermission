import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserModuleState } from '../../reducers'
import { ACTIONS, PageModel } from './pages.reducer'
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../CommonModule/services/httpClient';
import { URLS } from '../../constatns'
import {Alert, AlertCenterService, AlertType} from 'ng2-alert-center';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  pageForm: FormGroup;
  pageList: PageModel[];
  constructor(private fb: FormBuilder, private _store : Store<any>, private http: HttpService, private alert:AlertCenterService) {
    this._store.select(state=>state.usermanagement.pages).subscribe(e=>this.pageList =e);
   }

  ngOnInit() {
    if(this.pageList.length <=0)
    this.http.get(URLS.pageList).subscribe(e=>{
      this._store.dispatch({ type : ACTIONS.LOAD_PAGE_LIST, payload: e });
     })
    this.pageForm = this.fb.group({
      id: 0,
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  
  addPage(data: PageModel){
    this.http.post(URLS.pageadd, data).subscribe(e=>{
     this.pageForm.reset();
     this._store.dispatch({ type : ACTIONS.ADD_PAGE, payload: e });
    })
  }
}
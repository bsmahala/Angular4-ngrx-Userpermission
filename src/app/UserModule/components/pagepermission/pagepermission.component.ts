import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserModuleState } from '../../reducers'
import { ACTIONS as Role_ACTION, RolesModel } from '../roles/roles.reducer'
import { ACTIONS as PAGE_ACTION, PageModel } from '../pages/pages.reducer'
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../CommonModule/services/httpClient';
import { URLS } from '../../constatns'
import {Alert, AlertCenterService, AlertType} from 'ng2-alert-center';
import { Store } from '@ngrx/store';
import { ACTIONS as PAGE_TYPE_ACTIONS, PagetypeModel } from '../pagetype/pagetype.reducer'


@Component({
  selector: 'app-pagepermission',
  templateUrl: './pagepermission.component.html',
  styleUrls: ['./pagepermission.component.css']
})
export class PagepermissionComponent implements OnInit {
  roleshow:false;
  roleList: RolesModel[];
  pageList: PageModel[];
  pagetypeList: PagetypeModel[];
  link= {};
  selectPageNtype = {page:{},type:{}, apis: {}};
  
  constructor(private fb: FormBuilder, private _store : Store<any>, private http: HttpService, private alert:AlertCenterService) {
    this._store.select(state=>state.usermanagement.roles).subscribe(e=>this.roleList =e);
    this._store.select(state=>state.usermanagement.pages).subscribe(e=>this.pageList =e);
    this._store.select(state=>state.usermanagement.pagetypes).subscribe(e=>this.pagetypeList =e);
}


  ngOnInit() {
    this.http.get(URLS.rolepagePermissionList).subscribe(e=>{
      e.forEach(el=>{
          el.roleId = parseInt(el.roleId);
          el.pageId= parseInt(el.pageId);
          el.pageTId= parseInt(el.pageTId);
          var pgtypec = this.link[el.pageId];
          if(!pgtypec) {
            pgtypec = {};
            this.link[el.pageId] = pgtypec;
          }
          var apisid = pgtypec[el.pageTId];
          if(!apisid) {
            pgtypec[el.pageTId] = [el.roleId];
            apisid = pgtypec[el.pageTId];
          } else {
            apisid.push(el.roleId);
          }
      });    
    });

    if(this.roleList.length <=0)
    this.http.get(URLS.rolesList).subscribe(e=>{
     this._store.dispatch({ type : Role_ACTION.LOAD_ROLE_LIST, payload: e });
    })
    if(this.pageList.length <=0)
    this.http.get(URLS.pageList).subscribe(e=>{
      this._store.dispatch({ type : PAGE_ACTION.LOAD_PAGE_LIST, payload: e });
     })

    if(this.pagetypeList.length <=0)
    this.http.get(URLS.pagetypesList).subscribe(e=>{
     this._store.dispatch({ type: PAGE_TYPE_ACTIONS.LOAD_PAGE_TYPE_LIST, payload: e });
    })
  }


  avilableRole(show, page?, type?) {
    if(show){
      if(page && type) {
      this.selectPageNtype.page = page;
      this.selectPageNtype.type = type;
      this.selectPageNtype.apis = {};
      } else {
        return;
      }
    }
    this.roleshow = show;
    
  }

  getRoleArray(pageId, pageTypeId) {
    var pgtypec = this.link[pageId];
    if(!pgtypec) {
      return [];
    }
    var apisid = pgtypec[pageTypeId];
    if(apisid instanceof Array) {
      return apisid;
    }
    return [];
  }

  getNode(pageId, pageTypeId) {
    var pgtypec = this.link[pageId];
    if(!pgtypec) {
      pgtypec = {};
      this.link[pageId] = pgtypec;
    }
    var apisid = pgtypec[pageTypeId];
    if(!apisid) {
      pgtypec[pageTypeId] = [];
      apisid = pgtypec[pageTypeId];
    }
    return apisid;
  }

  saveRoleChange(pageId, pageTypeId) {        
    const array = this.getNode(pageId, pageTypeId);
    this.http.post(URLS.rolepagePermissionUpdate,{pageId: pageId, pageTypeId : pageTypeId, roleIds : Object.keys(this.selectPageNtype.apis)}).subscribe(e=>{ 
      Object.keys(this.selectPageNtype.apis).forEach(e=>{
        const index = array.indexOf(parseInt(e));
        if(index>=0) {
          console.log(index, array, this.selectPageNtype.apis[e])    
          if(!this.selectPageNtype.apis[e])
          array.splice(index, 1);
        } else {
          if(this.selectPageNtype.apis[e]) {
              array.push(parseInt(e));
          }        
        }
      });      
    this.avilableRole(false);
  });


  }
  
  updateLink(e, api) {
      this.selectPageNtype.apis[api.id] = e.target.checked;
  }
  saveDisabled(){
    return Object.keys(this.selectPageNtype.apis).length==0
  }
}

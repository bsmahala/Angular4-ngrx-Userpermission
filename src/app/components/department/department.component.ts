import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ControlValueAccessor,NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'from-field',
  template: `<div [formGroup]="parentGroup" 
  class="form-group" [ngClass]="{'has-error' : ((parentGroup.get(options.field).touched) && !parentGroup.get(options.field).valid)}">
                        <label for="name" class="control-label">{{options.label}}</label>
                        <input [type]="options.type||'text'" *ngIf="getFromCon()" class="form-control"  formAttrs="counter" [formControl]="getFromCon()"/>
                        <span class="help-block" *ngIf="((parentGroup.get(options.field).touched) && !parentGroup.get(options.field).valid)">
                  <span *ngIf="parentGroup.get(options.field).errors.required">
                  {{options.msg}}
                  </span>
                        </span>
          </div>
  `
})
export class Departm {

  @Input() options;
  @Input() parentGroup;
  @Input() requiredName;
 
  getFromCon() {
    return this.parentGroup.controls[this.options.field]
    //return undefined;
  }  
}



@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  providers: [Departm],
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  color = 'blue';
  formSubmitted = false;
  departmentForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.departmentForm = this.fb.group({
      id: 0,
      name: ['', Validators.required],
      color: [''],
      order: ['', Validators.required]
    });
  }


  saveDepartment() {
    if (this.departmentForm.valid) {
      console.log(this.departmentForm);
    }
  }

  colorChange(e) {
    console.log(e.target.value);
  }
}

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AbstractControl, FormArray,FormControl, FormGroup } from '@angular/forms';


const GENERIC_ERROR_MESSAGE = {
  required: ":field requied",
  email: "Not a valid email",
  maxlength: ":field max length should be 12",
  minlength: ":field max length should be 12"
}





@Component({
  selector: 'allcad-formerror-handler',
  templateUrl: './formerror-handler.component.html',
  styleUrls: ['./formerror-handler.component.css']
})
export class FormerrorHandlerComponent implements OnInit, OnChanges {

  @Input()
  className="error";

  @Input()
  field="";

  @Input()
  genericErrors;

  @Input()
  formGroup:FormGroup;

  formControl;
  erroreKey = [];
  @Input()
  errors={};

  constructor() {
    
  }

  

  ngOnInit() {
    var d = this.formGroup.get([this.field]);
    if(d instanceof FormControl) {
      this.formControl = d;
      this.erroreKey=[];
      this.errors = this.errors || {};
     
      Object.keys(this.errors[this.field] || {}).forEach(e=>{
        this.erroreKey.push(e);
      });
      this.genericErrors = this.genericErrors || GENERIC_ERROR_MESSAGE;
      Object.keys(this.genericErrors || {}).forEach(e=>{
        if(this.erroreKey.indexOf(e) <0)
        this.erroreKey.push(e);
      });
    }
  }

  ngOnChanges(){    
     
  }

  errorShown=false;  
  start(index, condtion, keyName, message){
    if(index==0) {
      this.errorShown=false;     
    }
    
    if(this.errorShown || !condtion)
    {
      return '';
    }
    this.errorShown = true;
    
    message = (this.errors[this.field] || {} )[keyName];
    if(!message) {
      message = this.genericErrors[keyName];
      message = message.replace(':field', this.camelize(this.field));
    }
    return message;
  }

  camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).replace(/\s+/g, '');
  }

}




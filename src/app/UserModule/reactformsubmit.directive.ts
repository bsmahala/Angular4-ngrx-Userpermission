import { Directive, HostListener, Renderer, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray,FormControl, FormBuilder, FormGroup,  Validator, ValidatorFn, Validators } from '@angular/forms';


@Directive({
    selector: '[allcadReactiveFormSubmit]'
})
export class Reactformsubmit{

    @Input()
    formGroup: FormGroup;

    @Output()
    allcadReactiveFormSubmit:EventEmitter<null> = new EventEmitter();

    constructor(
        private renderer: Renderer,
        private el: ElementRef
    ){}
  // Event listeners for element hosting
  // the directive
    @HostListener('submit') onsubmit() {
        if(this.formGroup.valid) {
            this.allcadReactiveFormSubmit.emit(this.formGroup.value);
        } else {
            this.validateAllFormFields(this.formGroup);
        }
    }

    validateAllFormFields(formGroup: FormGroup) { 
        if(!formGroup) {
            return;
        }
    Object.keys(formGroup.controls).forEach(field => {  
    const control = formGroup.get(field);             
    if (control instanceof FormControl) {             
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        
      this.validateAllFormFields(control);            
    } else if (control instanceof FormArray) {
        for(var i=0;i<control.length;i++) {
            this.validateAllFormFields(control.controls[i] as FormGroup);
        }            
      }
  });
}
}
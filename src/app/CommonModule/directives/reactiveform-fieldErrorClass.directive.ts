import { Directive, HostListener, Renderer, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray,FormControl, FormBuilder, FormGroup,  Validator, ValidatorFn, Validators } from '@angular/forms';


@Directive({
    selector: '[RFFieldErrorClass]'
})
export class Reactformsubmit{

    @Input()
    RFFieldErrorClass: FormGroup;

    @Input()
    errorClass: FormGroup;

    @Input()
    field: FormGroup;

    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
     }

   
  
}
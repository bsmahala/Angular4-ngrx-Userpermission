import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  formSubmitted = false;
  designationForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.designationForm = this.fb.group({
      id: 0,
      name: ['', Validators.required]
    });
  }


  saveDesignation() {
    if (this.designationForm.valid) {
      console.log(this.designationForm.value);
    }
  }

}

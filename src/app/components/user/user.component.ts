import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  formSubmitted = false;
  userForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      id: 0,
      name: ['', Validators.required],
      fatherName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      userName: ['', Validators.required],
      password : ['', Validators.required],
      confirmPassword: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      team: ['', Validators.required],
      employeId: ['', Validators.required]
    });
  }


  saveDepartment() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }


}

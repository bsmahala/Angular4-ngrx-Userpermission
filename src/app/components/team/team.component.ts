import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  formSubmitted = false;
  teamForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.teamForm = this.fb.group({
      id: 0,
      name: ['', Validators.required],
      members: [[], Validators.required]
    });
  }


  saveDepartment() {
    if (this.teamForm.valid) {
      console.log(this.teamForm.value);
    }
  }

}

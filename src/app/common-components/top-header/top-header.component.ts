import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../CommonModule/services/localstorage.serivce';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  userInfo;
  constructor(private _router: Router, private local: LocalStorageService) { }

  ngOnInit() {
    console.log(this.local.getLoginData())
  }

  toggleUserPopup() {
    document.querySelector('.user_popup').classList.toggle('show');
  }

  logout() {
    this.local.removeAll();
    this._router.navigate(['./login']);
  }
}

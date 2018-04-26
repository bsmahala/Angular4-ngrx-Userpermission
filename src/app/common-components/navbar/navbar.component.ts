import { Component, OnInit } from '@angular/core';
import { routes } from '../../UserModule/usermanageRouting';
import { Menu } from '../../CommonModule/interfaces/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usermanagementMenu: Menu[];
  
  constructor() {
    this.usermanagementMenu = routes;
  }

  ngOnInit() {
    
  }

  toggleMenu(){
    document.querySelector('.nav_bar').classList.toggle('collapse_menu')
  }

}

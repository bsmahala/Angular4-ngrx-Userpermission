import { Component, OnInit } from '@angular/core';
import { GENERIC_ERROR_MESSAGE } from './constants/error-message'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    errorMessage  = GENERIC_ERROR_MESSAGE;
    constructor() {
    }
}


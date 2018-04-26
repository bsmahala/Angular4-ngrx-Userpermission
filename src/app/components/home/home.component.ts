import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('editorBlock') editorBlock;

  constructor() { }
  ngOnInit() {
    console.log('')
  }

  openEditor() {
    // this.editorBlock.show();
    // this.editorBlock.nativeElement.className = 'modal fade show';

     $('#myModal').modal('show');
  }

}

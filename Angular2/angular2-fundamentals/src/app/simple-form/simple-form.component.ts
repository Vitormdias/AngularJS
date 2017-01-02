import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <input #myInput type="text">
    <button (click)="onClick($event , myInput.value)" >Click me</button>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  onClick(event , value) {
      console.log(event);
      console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}

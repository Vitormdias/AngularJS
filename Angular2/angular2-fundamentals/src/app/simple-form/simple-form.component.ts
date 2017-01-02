import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <input #myInput type="text">
    <button (click)="onClick(myInput.value)" >Click me</button>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  onClick(value) {
      console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}

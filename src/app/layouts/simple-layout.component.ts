import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: '<alert></alert><router-outlet></router-outlet>',
})
export class SimpleLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let body = document.getElementsByTagName('body')[0];

    body.classList.remove("sidebar-fixed"); //remove the class

    body.classList.add("sidebar-hidden"); //add the class
  }
}

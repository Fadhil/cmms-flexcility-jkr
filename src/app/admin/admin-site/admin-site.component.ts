import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-site',
  // templateUrl: './admin-site.component.html',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./admin-site.component.scss']
})
export class AdminSiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

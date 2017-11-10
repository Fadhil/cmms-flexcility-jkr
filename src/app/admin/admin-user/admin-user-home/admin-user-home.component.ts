
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-user-home',
  templateUrl: './admin-user-home.component.html',
  styleUrls: ['./admin-user-home.component.scss'],
  providers: []
})

export class AdminUserHomeComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
  ) { }

  ngOnInit(): void {

  }



}

import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-client-work-request-rate',
  templateUrl: './client-work-request-rate.component.html',
  styleUrls: ['./client-work-request-rate.component.scss']
})
export class ClientWorkRequestRateComponent implements OnInit {
  form = new FormGroup({
    myRatingControl: new FormControl('')
});
  constructor() { }

  ngOnInit() {
  }

}

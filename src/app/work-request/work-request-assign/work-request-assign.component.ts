import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

@Component({
  selector: 'app-work-request-assign',
  templateUrl: './work-request-assign.component.html',
  styleUrls: ['./work-request-assign.component.scss']
})
export class WorkRequestAssignComponent implements OnInit {
  @Input() showAssign: boolean;
  constructor() { }

  ngOnInit() {
  }

  public cancelWorkRequestModal;

}

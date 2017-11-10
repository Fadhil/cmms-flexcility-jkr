import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

@Component({
  selector: 'app-work-request-new',
  templateUrl: './work-request-new.component.html',
  styleUrls: ['./work-request-new.component.scss']
})
export class WorkRequestNewComponent implements OnInit {

  public showAssign: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showAssignForm(): void {
    this.showAssign = true;
  }


  public cancelWorkRequestModal;

  confirmCancellation(closedModal): void {
    console.log("confirmed");
    // Here we do actual closing of work order (POST to API server, etc)
    closedModal.hide();
  }
}

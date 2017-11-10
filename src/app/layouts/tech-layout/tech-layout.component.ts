import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './tech-layout.component.html',
  styleUrls: ['./tech-layout.component.scss']
})
export class TechLayoutComponent implements OnInit {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {

    let body = document.getElementsByTagName('body')[0];

    body.classList.remove("sidebar-hidden"); //remove the class

    body.classList.add("sidebar-fixed"); //add the class
  }

}

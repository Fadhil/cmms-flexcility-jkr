import { CalendarComponent } from 'ap-angular2-fullcalendar';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-ws-list',
  templateUrl: './admin-ws-list.component.html',
  styleUrls: ['./admin-ws-list.component.scss']
})
export class AdminWsListComponent {
  calendarOptions: Object = {
    
        fixedWeekCount : true,
        basicDay : true,
        defaultView: 'listMonth',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'All Day Event',
            start: '2017-09-01T08:00:00',
            color: 'yellow',
            url: 'http://localhost:4200/#/admin/schedule/view',
            textColor: 'black'
          },
          {
            title: 'Long Event',
            start: '2017-09-07T10:00:00',
            end: '2017-09-10',
            color: 'red',
            url: 'http://localhost:4200/#/admin/schedule/view',
            textColor: 'black'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-09-09T15:00:00',
            url: 'http://localhost:4200/#/admin/schedule/view',
            textColor: 'black'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-09-16T15:00:00',
            url: 'http://localhost:4200/#/admin/schedule/view',
            textColor: 'black'
          },
          {
            title: 'Conference',
            start: '2017-09-11',
            end: '2017-09-13',
            url: 'http://localhost:4200/#/admin/schedule/view',
            textColor: 'black'
          },
          {
            title: 'Click for Google',
            start: '2017-09-22',
            url: 'http://localhost:4200/#/admin/schedule/view',
            textColor: 'black'
          },
          {
            title: 'Merdeka',
            start: '2017-08-31',
            url: 'http://localhost:4200/#/admin/schedule/view',
            textColor: 'black'
          }
        ]
      };
    
      @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
    
       changeCalendarView(view) {
         this.myCalendar.fullCalendar('changeView', view);
       }

}

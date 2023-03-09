import { Component, ViewChild } from '@angular/core';
// import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CalendarData, CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  [x: string]: any;
  title = 'Frontend';

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dayCellContent: this.handleDayRender.bind(this), // bind is important!
    events: [
      { title: 'Asamblea Mes de Mayo', date: '2022-05-27' },
      { title: 'event 2', date: '2022-06-30' }
    ]
  // tslint:disable-next-line: typedef
  }; handleDayRender(arg: { dayNumberText: any; })
  {
     const customHtml = '';
     const mystring = arg.dayNumberText;
     return mystring + customHtml;
  }


  // // tslint:disable-next-line: member-ordering
  // private daysArray = ['Sunday',  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // // tslint:disable-next-line: member-ordering
  // private date = new Date();
  // // tslint:disable-next-line: member-ordering
  // public hour: any;
  // // tslint:disable-next-line: member-ordering
  // public minute: string | undefined;
  // // tslint:disable-next-line: member-ordering
  // public second: string | undefined;
  // // tslint:disable-next-line: member-ordering
  // public ampm: string | undefined;
  // // tslint:disable-next-line: member-ordering
  // public day: string | undefined;

  // constructor() {}

  // // ngOnInit(): void {
  // // }

  // // tslint:disable-next-line: use-lifecycle-interface
  // // tslint:disable-next-line: typedef
  // // ngOnInit()  {
  // //   setInterval(() => {
  // //    const date = new Date();
  // //    this.updateDate(date);
  // //   }, 1000);

  // //   this.day = this.daysArray[this.date.getDay()];
  // // }

  // //  private updateDate(date: Date) {
  // //    const hours = date.getHours();

  // //    this.ampm = hours >= 12 ? 'PM' : 'AM';
  // //    this.hour = hours % 12;
  // //    this.hour = this.hour ? this.hour : 12;
  // //    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

  // //    const minutes = date.getMinutes();
  // //    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

  // //    const seconds = date.getSeconds();
  // //    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  // //  }

}

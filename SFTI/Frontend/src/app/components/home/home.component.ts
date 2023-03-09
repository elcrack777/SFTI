import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CalendarData, CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  [x: string]: any;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dayCellContent: this.handleDayRender.bind(this), // bind is important!
    events: [
      { title: 'Entrega Corolla', date: '2023-03-27' },
      { title: 'Dia del Carro', date: '2023-05-27' },
      { title: '50 Aniversario', date: '2023-02-12' }
    ]
  // tslint:disable-next-line: typedef
  }; handleDayRender(arg: { dayNumberText: any; })
  {
     const customHtml = '';
     const mystring = arg.dayNumberText;
     return mystring + customHtml;
  }

}



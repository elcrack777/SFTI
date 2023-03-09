// import { NgModule } from "@angular/core";
// import { BrowserModule } from "@angular/platform-browser";
// import { FormsModule } from "@angular/forms";
// import { HttpClientModule } from "@angular/common/http";
// import { BrowserAnimationsModule } from
//     "@angular/platform-browser/animations";

// import { HomeComponent } from "./home.component";

// import { CalendarModule } from "primeng/calendar";
// import { HomeComponent } from './home.component';

// @NgModule({
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     CalendarModule,
//     FormsModule,
//   ],
//   declarations: [HomeComponent],
//   bootstrap: [HomeComponent],
// })
// export class AppModule {}


import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home.component";
//import { CarouselModule } from 'primeng/carousel';


@NgModule({
   imports: [
   BrowserModule,
   //CalendarModule,
   //CarouselModule
   //FormsModule
 ],
   declarations: [
   //HomeComponent,
 ],
 providers: [],
 bootstrap: [HomeComponent],
})

export class HomeModule { }


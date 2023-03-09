import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
// Modules
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
//Providers
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { VerComponent } from './components/ver/ver.component';

// import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { FullCalendarModule } from '@fullcalendar/angular';
import  dayGridPlugin from '@fullcalendar/daygrid';
import  interactionPlugin  from '@fullcalendar/interaction';
import { AboutComponent } from './components/about/about.component';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    FormularioComponent,
    AgregarComponent,
    ActualizarComponent,
    VerComponent,
  ],

  imports: [
    BrowserModule,
    // NgModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    CarouselModule.forRoot(),
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FullCalendarModule,
    NgbModule
  ],
  providers: [
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }

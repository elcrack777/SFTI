import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { VerComponent } from './components/ver/ver.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
{ path: "home", component: HomeComponent },
{ path: "formulario", component: FormularioComponent, canActivate:[AuthGuard] },
{ path: "agregar", component: AgregarComponent },
{ path: "about", component: AboutComponent },
{ path: "actualizar/:id", component: ActualizarComponent },
{ path: "ver/:id", component: VerComponent },
{ path: "login", component: LoginComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

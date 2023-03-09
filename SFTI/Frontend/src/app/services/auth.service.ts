import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { $ } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

private URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private jwHelper: JwtHelperService) { }

  //  Petición Post singin
  singin(user:any){
    return this.http.post(`${this.URL}/user/singin`,user);
  }

  //#region peticiones clientes
  clientesList(){
    return this.http.get(`${this.URL}/clientes/clientesList`);
  }

  clientesDetalle(id:any){
    return this.http.post(`${this.URL}/clientes/clientesDetalle`,id);
  }

  nuevoClientes(clientes:any){
    return this.http.post(`${this.URL}/clientes/nuevoClientes`,clientes);
  }

  actualizarDatos(datos:any){
    return this.http.post(`${this.URL}/clientes/actualizarDatos`,datos);
  }

  eliminarClientes(id:any){
    return this.http.post(`${this.URL}/clientes/eliminarClientes`,id);
  }



  //#endregion peticiones clientes


  //  Autenticación
  isAuth():boolean{
    const token:any = localStorage.getItem('token');
    if (this.jwHelper.isTokenExpired(token)  || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
}

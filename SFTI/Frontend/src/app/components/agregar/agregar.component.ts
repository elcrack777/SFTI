import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formAgregar!: FormGroup;
  submitted = false;
  titulo = 'FACTURACIÓN CLIENTES.';
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router
    ) { }

   // tslint:disable-next-line: typedef
   Volver(){
  this.router.navigate(['formulario']);
 }

  ngOnInit(): void {
    this.formAgregar = this.formBuilder.group({
      numeroControl: ['', Validators.required],
      nombres: ['', Validators.required],
      apaterno: ['', Validators.required],
      amaterno: ['', Validators.required],
      tdp: ['', Validators.required],
      rfc: ['', Validators.required],
      calle: ['', Validators.required],
      colonia: ['', Validators.required],
      extint: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      cp: ['', Validators.required]
     });
  }

  // tslint:disable-next-line: typedef
  get f(){return this.formAgregar.controls; }

  // tslint:disable-next-line: typedef
  onSubmit(){ // funcion del formulario
    this.submitted = true;
    if (this.formAgregar.invalid){
      return;
    }
    //  alert('Mensaje Enviado!'+JSON.stringify(this.formAgregar.value))
    //  console.log ('Mensaje Enviado!'+JSON.stringify(this.formAgregar.value))

    this.nuevoClientes();
  }

  // tslint:disable-next-line: typedef
  nuevoClientes(){
    this.authService.nuevoClientes(this.formAgregar.value).subscribe(
      res => {
        if (res){

          this.router.navigate(['home']);
        }else{
          console.log ('Datos no ingresados');
        }
      }
    );
  }
}

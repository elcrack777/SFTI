import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  submitted  = false;
   usuarios  = {
   Usuario: '',
   Contra: '',
 };

  constructor(
     private formBuilder: FormBuilder,
     private authService: AuthService,
     private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      Usuario: ['', Validators.required],
      Contra: ['', Validators.required]
    });
  }

  // tslint:disable-next-line: typedef
  get f(){return this.formLogin.controls; }

  // tslint:disable-next-line: typedef
  onSubmit(){ // funcion del formulario
    this.submitted = true;
    if (this.formLogin.invalid){
      return;
    }}
  // tslint:disable-next-line: typedef
  logIn(){
  // console.log(this.usuarios);
  this.authService.singin(this.usuarios).subscribe( (res: any) => {
    // console.log(res);
    localStorage.setItem('usuario', this.usuarios.Usuario);
    localStorage.setItem('token', res.token);
    this.router.navigate(['formulario']);
    if (res.token){
       window.localStorage.setItem('usuario', res.token);
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Error al iniciar sesión...',
      text: 'Usuario o contraseña son incorrectos',
    });
    //  }else{
    //   //  alert(res);
    //   //  this.usuarios  = {
    //   //   Usuario: '',
    //   //   Contra: '',
    //   }
     }
  });
  }

}



import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  [x: string]: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private activateRouter: ActivatedRoute
    ) { }
  // tslint:disable-next-line: typedef
  get f(){return this.formActualizar.controls; }
  idparametro: any;
  detalleClientes: any;
  formActualizar!: FormGroup;
  submitted = false;
  titulo = 'ACTUALIZACIÓN DE DATOS';
        actualizarForm = new FormGroup({
        id: new FormControl (''),
        numeroControl: new FormControl (''),
        nombres: new FormControl (''),
        apaterno: new FormControl (''),
        amaterno:  new FormControl (''),
        tdp: new FormControl (''),
        rfc:  new FormControl (''),
        calle:  new FormControl (''),
        colonia:  new FormControl (''),
        extint:  new FormControl (''),
        correo:  new FormControl (''),
        telefono:  new FormControl (''),
        cp: new FormControl ('')
        });

    // tslint:disable-next-line: typedef
    Volver(){
      this.router.navigate(['formulario']);
     }
  ngOnInit(): void {
    this.idparametro = Number(this.activateRouter.snapshot.params.id);
    this.formActualizar = this.formBuilder.group({
      id: [this.idparametro],
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
    this.clientesDetalle();
  }

  // tslint:disable-next-line: typedef
  onSubmit(){ // funcion del formulario
    this.submitted = true;
    if (this.formActualizar.invalid){
      return;
    }
  }


  // tslint:disable-next-line: typedef
  clientesDetalle() {
    this.authService.clientesDetalle({id: this.idparametro}).subscribe((res) => {
      // console.log(this.formActualizar);
      if (res) {
        console.log(res);
        // this.detalleClientes = [];
        this.detalleClientes= res;
        console.log(this.detalleClientes[0]);
        var numeroControl = String(this.detalleClientes.numeroControl);
        this.formActualizar = this.formBuilder.group({
          id: [this.idparametro],
          numeroControl: [`${this.detalleClientes[0].numeroControl}`, Validators.required],
          nombres: [`${this.detalleClientes[0].nombres}`, Validators.required],
          apaterno: [`${this.detalleClientes[0].apaterno}`, Validators.required],
          amaterno: [`${this.detalleClientes[0].amaterno}`, Validators.required],
          tdp: [`${this.detalleClientes[0].tdp}`, Validators.required],
          rfc: [`${this.detalleClientes[0].rfc}`, Validators.required],
          calle: [`${this.detalleClientes[0].calle}`, Validators.required],
          colonia: [`${this.detalleClientes[0].colonia}`, Validators.required],
          extint: [`${this.detalleClientes[0].extint}`, Validators.required],
          correo: [`${this.detalleClientes[0].correo}`, Validators.required],
          telefono: [`${this.detalleClientes[0].telefono}`, Validators.required],
          cp: [`${this.detalleClientes[0].cp}`, Validators.required]
         });
      }
      }
    );
  }



  // tslint:disable-next-line: typedef
  actualizarDatos(){
    this.authService.actualizarDatos(this.formActualizar.value).subscribe(
      res => {
        if (res){

          console.log ('Datos Actualizados');
          this.router.navigate(['formulario']);
        }else{
          console.log ('Datos no ingresados');
        }
      }
);
  }
}

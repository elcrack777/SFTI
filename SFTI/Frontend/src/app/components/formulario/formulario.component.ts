import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  clienteslista: any;
  usuarios: any;
  clienteslistaTmp: any;
  noResults!: boolean;

  constructor(
    // tslint:disable-next-line: variable-name
    private _service: AuthService,
    private router: Router
  ) { }


 // tslint:disable-next-line: typedef
 Agregar(){
  this.router.navigate(['agregar']);
 }

 // tslint:disable-next-line: typedef
 Ver(id: any){
  this.router.navigate(['ver', id]);
 }

 // tslint:disable-next-line: typedef
 Actualizar(id: any){
  this.router.navigate(['actualizar', id]);
 }



  ngOnInit(): void {
    this.clientesList();
    // Autenticación de rol
    this.usuarios = localStorage.getItem('usuario');
  }

  clientesList(): any {
    this._service.clientesList().subscribe((res) => {
      if (res) {
        console.log(res);
        // this.clienteslista = [];
        this.clienteslista = res;
        this.clienteslistaTmp = res;
        console.log(this.clienteslista);
      } else {
      }
    });
  }

  // tslint:disable-next-line: typedef
  eliminarClientes(id: number){
    Swal.fire({
  title:'Seguro que desea eliminar el cliente?',
  text: 'Estos datos no podran ser recuperados!',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#A60311',
  cancelButtonText: 'No, cancelar',
  cancelButtonColor: '#595959',
  confirmButtonText: 'Si, eliminar datos del cliente'
  }).then((result) => {
  if (result.isConfirmed) {
    // tslint:disable-next-line: object-literal-shorthand
    this._service.eliminarClientes({id: id}).subscribe((data) => {
      this.clientesList();
    }, (error) => {
      console.log(error);
    });
    Swal.fire(
      'Eliminado!',
      'El cliente fue eliminado.',
      'success'
    );
      }
  });
  }


  doFilter(value: any): void {
    this.clienteslista = this.clienteslistaTmp;
    this.noResults = false;
    if (value) {
      const res = this.clienteslista.filter((opcion: { nombres: string; }) =>
        opcion.nombres.toUpperCase().search(value.target.value.toUpperCase()) !== -1
        );
      if (res.length) {
        this.clienteslista = [];
        this.clienteslista = res;

        value = '';
      } else {
        this.clienteslista = [];
        this.noResults = true;
      }
    }
    else {
    this.clienteslista = this.clienteslistaTmp;
    }
  }

}

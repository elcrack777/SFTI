import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {
  detalleClientes: any;
  idparametro: any;

  constructor(
    private authService: AuthService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  // tslint:disable-next-line: typedef
  Volver(){
  this.router.navigate(['formulario']);
 }


  ngOnInit(): void {
    this.idparametro = Number(this.activateRouter.snapshot.params.id);

    this.clientesDetalle();
  }



  // tslint:disable-next-line: typedef
  clientesDetalle() {
    this.authService.clientesDetalle({id: this.idparametro}).subscribe((res) => {
      // console.log(this.formActualizar);
      if (res) {
        console.log(res);
        // this.detalleAlumno = [];
        this.detalleClientes = res;
        this.detalleClientes = this.detalleClientes[0];
        console.log(this.detalleClientes);
      }
      }
    );
  }
}

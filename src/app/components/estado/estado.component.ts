import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EstadosService, Estado } from 'src/app/services/estados.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  estado: any = {};

  constructor(private _estadoService: EstadosService,
    private activatedRoute: ActivatedRoute) { 

      this.activatedRoute.params.subscribe( params => {
        this.estado = this._estadoService.getEstado( params['id'] );
        console.log(params['id']);
      });

    }

  ngOnInit(): void {
  }

}

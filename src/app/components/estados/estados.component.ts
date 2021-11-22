import { Component, OnInit } from '@angular/core';
import { EstadosService, Estado } from 'src/app/services/estados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  estados: Estado[] = [];

  constructor(private _estadoService: EstadosService,
              private router: Router) { }

  ngOnInit(): void {
    this.estados = this._estadoService.getEstados();
   }

   verEstado(id:number){
     this.router.navigate( ['/estado',id] );
   }

}

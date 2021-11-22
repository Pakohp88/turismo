import { Component, OnInit } from '@angular/core';
import { EstadosService, Estado } from 'src/app/services/estados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  estados: Estado[] = [];

  constructor(private _estadoService: EstadosService) { }

  ngOnInit(): void {
    this.estados = this._estadoService.getEstados();
    console.log(this.estados);
   }

}

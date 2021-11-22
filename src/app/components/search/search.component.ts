import { Component, OnInit } from '@angular/core';
import { EstadosService, Estado } from 'src/app/services/estados.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  estados: Estado[] = []

  constructor(private activatedRoute: ActivatedRoute,
              private _serviceEstado: EstadosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.estados = this._serviceEstado.searchEstado( params['termino'] );
    });
  }

}

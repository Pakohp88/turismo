import { Component, OnInit, SimpleChange } from '@angular/core';
import { EstadosService, Estado } from 'src/app/services/estados.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  estados: Estado[] = []
  subscripcion: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private _serviceEstado: EstadosService) { }

  ngOnInit(): void {
    this.subscripcion = this.activatedRoute.params.subscribe( params => {
      this.estados = this._serviceEstado.searchEstado( params['termino'] );
    });
  }

  ngOnChanges(changes: SimpleChange){
    console.log('Metodo ngOnChanges');
  }

  ngAfterContentChecked(){
    console.log('Metodo ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('Metodo ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('Metodo ngAfterViewChecked');
  }

  ngDoCkeck(){
    console.log('Metodo ngDoCkeck');
  }

  ngOnDestroy(){     
    this.subscripcion.unsubscribe();   
  }

}

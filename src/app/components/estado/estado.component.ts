import { Component, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { EstadosService } from 'src/app/services/estados.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit, OnDestroy {

  estado: any = {};  
  subscripcion: Subscription;
  
  constructor(private _estadoService: EstadosService,
    private activatedRoute: ActivatedRoute) {      
      
    }

  ngOnInit(): void {
    this.subscripcion = this.activatedRoute.params.subscribe( params => {
      this.estado = this._estadoService.getEstado( params['id'] );      
    });        
  }

  ngOnChanges(changes: SimpleChange){
    console.log('Metodo ngOnChanges');
  }

  ngAfterContentInit(){
    console.log('Metodo ngAfterContentInit');
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

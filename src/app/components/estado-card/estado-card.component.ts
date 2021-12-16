import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estado-card',
  templateUrl: './estado-card.component.html',
  styleUrls: ['./estado-card.component.css']
})
export class EstadoCardComponent implements OnInit {

  @Input() estado: any;
  @Input() Id?: number = -1;
  @Output() estadoSeleccionado: EventEmitter<number>;

  constructor(private router:Router) { 
    this.estadoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
    console.log('Metodo ngInit');
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

  verEstado(){          
    this.router.navigate( ['/estado', this.Id] );
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  }

  verEstado(){          
    this.router.navigate( ['/estado', this.Id] );
  }

}

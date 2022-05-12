import { Component, Input, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {

  @Input() inputSeleccion:Array<any> = [];
  
  constructor() 
  {}

  ngOnInit(): void {}
}

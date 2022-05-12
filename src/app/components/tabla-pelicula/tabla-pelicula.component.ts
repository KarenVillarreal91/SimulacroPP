import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  peliculas:any;

  @Output() peliculaEmitter:EventEmitter<any> = new EventEmitter();
  
  constructor(private peliculaService:PeliculaService) 
  { 
    this.peliculaService.TraerPeliculas().subscribe((data)=>{
      this.peliculas = data;
    });
  }

  ngOnInit(): void {}

  Seleccionar(seleccion:any)
  {
    this.peliculaEmitter.emit(seleccion);
  }
}

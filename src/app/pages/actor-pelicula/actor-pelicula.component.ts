import { Component, OnInit } from '@angular/core';
import { throws } from 'assert';
import { ApiService } from 'src/app/service/api.service';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent implements OnInit {

  peliculas:any;
  peliculasMostrar:Array<any> = [];
  paises:any;
  paisMostrar:any;
  actor:any;

  constructor(private peliculaService:PeliculaService, private api:ApiService) 
  { 
    this.peliculaService.TraerPeliculas().subscribe((data)=>{
      this.peliculas = data;
    });

    api.ObtenerPaises().subscribe((data)=>{
      this.paises = data;
    });
  }

  ngOnInit(): void {}

  Seleccionar(e:any)
  {
    let seleccionado = e.nombre + ' ' + e.apellido;
    this.peliculasMostrar = [];
    this.actor = e;
    
    for(let pelicula of this.peliculas)
    {
      if(pelicula.actor == seleccionado)
      {
        this.peliculasMostrar.push(pelicula);
      }
    }

    for(let pais of this.paises)
    {
      if(pais.name == e.pais)
      {
        this.paisMostrar = pais;
      }
    }
  }
}

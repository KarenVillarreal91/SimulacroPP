import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  @Output() actorSeleccionadoEmitter:EventEmitter<any> = new EventEmitter();
  actores:any;

  constructor(private actorService:ActorService) 
  {
    actorService.TraerActores().subscribe((data)=>{
      this.actores = data;
    });
  }

  ngOnInit(): void {}

  SeleccionarActor(seleccion:any)
  {
    this.actorSeleccionadoEmitter.emit(seleccion);
  }
}

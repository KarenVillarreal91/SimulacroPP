import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

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

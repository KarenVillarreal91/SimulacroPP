import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-actor',
  templateUrl: './detalles-actor.component.html',
  styleUrls: ['./detalles-actor.component.scss']
})
export class DetallesActorComponent implements OnInit {

  @Input() inputSeleccion:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}

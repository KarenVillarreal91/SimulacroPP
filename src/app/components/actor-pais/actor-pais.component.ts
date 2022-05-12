import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-pais',
  templateUrl: './actor-pais.component.html',
  styleUrls: ['./actor-pais.component.scss']
})
export class ActorPaisComponent implements OnInit {

  @Input() inputSeleccion:any;

  constructor() { }

  ngOnInit(): void {}
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  @Output() paisSeleccionadoEmitter:EventEmitter<any> = new EventEmitter();
  paises:any;

  constructor(private api:ApiService) 
  { 
    api.ObtenerPaises().subscribe((data)=>{
      this.paises = data;
    });
  }

  ngOnInit(): void {}

  SeleccionarPais(seleccion:any)
  {
    this.paisSeleccionadoEmitter.emit(seleccion);
  }
}

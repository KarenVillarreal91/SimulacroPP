import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/entidades/actor';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  form !: FormGroup;
  subido:boolean = false;
  paisFoto:string = "";

  constructor(private fb:FormBuilder, private actorService:ActorService) 
  { 
    this.form = this.fb.group({
      'nombre':['', Validators.required],
      'apellido':['', Validators.required],
      'edad':['',[Validators.required, Validators.min(18), Validators.max(99)]],
      'email':['',[Validators.required, Validators.email]],
      'pais':['', Validators.required]
    });
  }

  ngOnInit(): void {}

  SubirActor()
  {
    this.actorService.SubirActor(this.form.value);
    this.Confirmar();
  }

  SeleccionarPais(e:any)
  {
    this.paisFoto = e.flag;
    this.form.get('pais')?.setValue(e.name);
  }

  Confirmar()
  {
    this.subido = true;
    this.form.reset();

    setTimeout(() => {
      this.subido = false;
    }, 2000);
  }
}

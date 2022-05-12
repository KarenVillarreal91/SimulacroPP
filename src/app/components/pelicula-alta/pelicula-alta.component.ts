import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  form !: FormGroup;
  formData: FormData = new FormData();
  subido:boolean = false;

  constructor(private fb:FormBuilder, private peliculaService:PeliculaService) 
  { 
    this.form = this.fb.group({
      'nombre':['', Validators.required],
      'tipo':['', Validators.required],
      'cantPublico':['',[Validators.required, Validators.min(20), Validators.max(160)]],
      'estreno':['',Validators.required],
      'actor':['', Validators.required],
      'foto':['', Validators.required]
    });
  }

  ngOnInit(): void {}

  SubirPelicula()
  {
    this.peliculaService.SubirPelicula(this.form.value, this.formData);
    this.Confirmar();
  }

  SubirFoto(e:any)
  {
    this.formData.append('foto', e.target.files[0]);
  }

  SeleccionarActor(e:any)
  {
    this.form.get('actor')?.setValue(`${e.nombre} ${e.apellido}`);
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

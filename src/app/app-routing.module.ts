import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { ActorPeliculaComponent } from './pages/actor-pelicula/actor-pelicula.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';

const routes: Routes = [
  {path:"", component:BienvenidoComponent},
  {path:"busqueda", component:BusquedaComponent},
  {path:"peliculas/alta", component:PeliculaAltaComponent},
  {path:"actor/alta", component:ActorAltaComponent},
  {path:"actor/listado", component:ActorListadoComponent},
  {path:"peliculas/listado", component:PeliculaListadoComponent},
  {path:"actor/actorPelicula", component:ActorPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

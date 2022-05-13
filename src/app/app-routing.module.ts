import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoginComponent } from './components/login/login.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { AutentificadorGuard } from './guard/autentificador.guard';
import { ActorPeliculaComponent } from './pages/actor-pelicula/actor-pelicula.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"bienvenido", component:BienvenidoComponent, canActivate:[AutentificadorGuard]},
  {path:"busqueda", component:BusquedaComponent, canActivate:[AutentificadorGuard]},
  {path:"peliculas/alta", component:PeliculaAltaComponent, canActivate:[AutentificadorGuard]},
  {path:"actor/alta", component:ActorAltaComponent, canActivate:[AutentificadorGuard]},
  {path:"actor/listado", component:ActorListadoComponent, canActivate:[AutentificadorGuard]},
  {path:"peliculas/listado", component:PeliculaListadoComponent, canActivate:[AutentificadorGuard]},
  {path:"actor/actorPelicula", component:ActorPeliculaComponent, canActivate:[AutentificadorGuard]},
  {path:"", redirectTo:"/login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

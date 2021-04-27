import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';

const routes: Routes = [
  {path:'anuncio/:id',component:AnuncioComponent},
  {path:'home',component:HomeComponent},
  {path:'busqueda',component:BusquedaComponent},
  {path:'mis-reservas',component:MisReservasComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

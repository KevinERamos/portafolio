import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'portafolio', component: PortafolioComponent},
  {path: 'tecnologias', component: TecnologiasComponent},
  {path: '**', component: PaginaErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

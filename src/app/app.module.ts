import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { SliderComponent } from './slider/slider.component';
import { DedicacionComponent } from './dedicacion/dedicacion.component';
import { FooterComponent } from './footer/footer.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosService } from './service/proyectos.service';
import {HttpClientModule} from '@angular/common/http';
import { ComasPipe } from './pipes/comas.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    SliderComponent,
    DedicacionComponent,
    FooterComponent,
    PortafolioComponent,
    PaginaErrorComponent,
    TecnologiasComponent,
    InicioComponent,
    ComasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProyectosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

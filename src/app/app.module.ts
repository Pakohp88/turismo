import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EstadosService } from './services/estados.service';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EstadosComponent } from './components/estados/estados.component';
import { EstadoComponent } from './components/estado/estado.component';
import { EstadoCardComponent } from './components/estado-card/estado-card.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EstadosComponent,
    EstadoComponent,
    EstadoCardComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [EstadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EstadosService } from './services/estados.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EstadosComponent } from './components/estados/estados.component';
import { EstadoComponent } from './components/estado/estado.component';
import { EstadoCardComponent } from './components/estado-card/estado-card.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';


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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EstadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

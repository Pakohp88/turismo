import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EstadosComponent } from './components/estados/estados.component';
import { EstadoComponent } from './components/estado/estado.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'estados', component: EstadosComponent },
    { path: 'estado/:id', component: EstadosComponent },
    { path: 'search/:termino', component:  SearchComponent},
    { path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

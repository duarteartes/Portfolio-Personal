import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetallesComponent } from './detalles/detalles.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre-mi', component: SobreMiComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'portfolio/:id', component: DetallesComponent },
    { path: '**', component: HomeComponent }
];

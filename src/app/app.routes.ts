import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre-mi', component: SobreMiComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', component: HomeComponent }
];

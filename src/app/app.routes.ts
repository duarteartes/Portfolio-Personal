import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetallesComponent } from './detalles/detalles.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre-mi', component: SobreMiComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'portfolio/:id', component: DetallesComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
        canActivate: [AuthGuard]
    },
    { path: '**', component: HomeComponent }
];

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

export const routes: Routes = [
    {path:"login", component: LoginComponent},
    {path:"error", component: ErrorComponent},
    {path:"bienvenido", component: BienvenidoComponent}
];

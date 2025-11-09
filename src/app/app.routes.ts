import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ErrorComponent } from './components/error.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        loadChildren: () => import('./pages/todo/todo-routing.module').then(m => m.TodoRoutingModule),
        canActivate: [AuthGuardService]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    { path: '**', component: ErrorComponent }
];

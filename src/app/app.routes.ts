import { Routes } from '@angular/router';
import { ConsultationComponent } from './consultation/consultation.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path: 'consultation', component: ConsultationComponent},
    {path: 'register', component: RegisterComponent},

];

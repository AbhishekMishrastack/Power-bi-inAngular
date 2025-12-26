import { Routes } from '@angular/router';
import { DashboardComponent } from './UI_Components/dashboard/dashboard.component';
import { DashboardRawComponent } from './UI_Components/dashboard-raw/dashboard-raw.component';

export const routes: Routes = [
    {path:'dash',component:DashboardComponent},
    {path:'dash-oo',component:DashboardRawComponent}
];

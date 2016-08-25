import { Routes, RouterModule } from '@angular/router';
import { LatestComponent, PoliticsComponent } from './../pages/index';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'latest',
        pathMatch: 'full'
    },
    {
        path: 'latest',
        component: LatestComponent
    },
    {
        path: 'politics',
        component: PoliticsComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
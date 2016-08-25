import { Routes, RouterModule } from '@angular/router';
import { LatestComponent, YesterdayComponent } from './../pages/index';

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
        path: 'yesterday',
        component: YesterdayComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
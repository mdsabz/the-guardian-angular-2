import { Routes, RouterModule } from '@angular/router';

import { LatestComponent } from './../pages/latest.component';
import { YesterdayComponent } from './../pages/yesterday.component';

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
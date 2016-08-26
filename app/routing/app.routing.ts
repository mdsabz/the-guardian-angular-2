import { Routes, RouterModule } from '@angular/router';
import { LatestComponent, PoliticsComponent, ArticleComponent } from './../pages/index';

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
    },
    {
        path: 'article/:id',
        component: ArticleComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
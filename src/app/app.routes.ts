import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/wireframe',
    },
    {
        path: 'wireframe',
        loadComponent: () =>
          import('./wireframe/wireframe.component').then((x) => x.WireframeComponent),
    },
    {
        path: 'architecture',
        loadComponent: () =>
          import('./architecture/architecture.component').then((x) => x.ArchitectureComponent),
    },
    {
        path: 'best-practices',
        loadComponent: () =>
          import('./best-practices/best-practices.component').then((x) => x.BestPracticesComponent),
    },
];

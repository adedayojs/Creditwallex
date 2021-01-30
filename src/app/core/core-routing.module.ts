import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren() {
          return import('./modules/dashboard/dashboard-routing.module').then(
            (mod) => mod.DashboardRoutingModule
          );
        },
      },
      {
        path: 'people',
        loadChildren() {
          return import('./modules/people/people-routing.module').then(
            (mod) => mod.PeopleRoutingModule
          );
        },
      },
      {
        path: 'starships',
        loadChildren() {
          return import('./modules/starship/starship-routing.module').then(
            (mod) => mod.StarshipRoutingModule
          );
        },
      },
      {
        path: 'vehicles',
        loadChildren() {
          return import('./modules/vehicles/vehicles-routing.module').then(
            (mod) => mod.VehiclesRoutingModule
          );
        },
      },
      { path: '**', redirectTo: '/auth/login' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}

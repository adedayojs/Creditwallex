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
          return import('./modules/dashboard/dashboard.module').then(
            (mod) => mod.DashboardModule
          );
        },
      },
      {
        path: 'people',
        loadChildren() {
          return import('./modules/people/people.module').then(
            (mod) => mod.PeopleModule
          );
        },
      },
      {
        path: 'species',
        loadChildren() {
          return import('./modules/species/species.module').then(
            (mod) => mod.SpeciesModule
          );
        },
      },
      {
        path: 'starships',
        loadChildren() {
          return import('./modules/starship/starship.module').then(
            (mod) => mod.StarshipModule
          );
        },
      },
      {
        path: 'vehicles',
        loadChildren() {
          return import('./modules/vehicles/vehicles.module').then(
            (mod) => mod.VehiclesModule
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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinisterListComponent } from '../minister-list/minister-list.component';
import { MinisterDetailComponent } from '../minister-detail/minister-detail.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MinistersResolver } from '../minister-list/ministers-resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'minister-list',
    pathMatch: 'full'
  },
  {
    path: 'minister-list',
    children: [
      {
        path: '',
        component: MinisterListComponent,
        resolve: {
          ministers: MinistersResolver
        }
      },
      {
        path: ':id/:fullName',
        redirectTo: 'minister-detail'
      }
    ]
  },
  {
    path: 'minister-detail/:id/:fullName',
    component: MinisterDetailComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    CommonModule
  ], providers: [
    MinistersResolver
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
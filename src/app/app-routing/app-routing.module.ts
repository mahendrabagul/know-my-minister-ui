import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinisterListComponent } from '../minister-list/minister-list.component';
import { MinisterDetailComponent } from '../minister-detail/minister-detail.component';

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
        component: MinisterListComponent
      },
      {
        path: ':id',
        redirectTo: 'minister-detail'
      }
    ]
  },
  {
    path: 'minister-detail',
    component: MinisterDetailComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinisterListComponent } from '../minister-list/minister-list.component';
import { MinisterDetailComponent } from '../minister-detail/minister-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MinisterListComponent,
  }, {
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
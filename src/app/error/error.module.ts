import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { UnathorizedComponent } from './unathorized.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes =
[
    {
      path: 'notfound',
      component: NotFoundComponent
    },
    {
      path: 'unauthorized',
      component: UnathorizedComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotFoundComponent, UnathorizedComponent]
})
export class ErrorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// shared
import { SharedModule } from '@bk/module-shared';

import {DocHomeComponent} from './doc-home.component';

const realNameRoutes: Routes = [
  {
    path: __api.ngRouterPath(''),
    component: DocHomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(realNameRoutes)
  ],
  declarations: [DocHomeComponent],
  providers: []
})
export class DocHomeModule {}

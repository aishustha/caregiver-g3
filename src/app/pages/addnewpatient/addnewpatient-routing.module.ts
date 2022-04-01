import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewpatientPage } from './addnewpatient.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewpatientPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewpatientPageRoutingModule {}

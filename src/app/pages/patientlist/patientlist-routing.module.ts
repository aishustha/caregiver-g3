import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientlistPage } from './patientlist.page';

const routes: Routes = [
  {
    path: '',
    component: PatientlistPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientlistPageRoutingModule {}

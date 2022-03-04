import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientinfoPage } from './patientinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PatientinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientinfoPageRoutingModule {}

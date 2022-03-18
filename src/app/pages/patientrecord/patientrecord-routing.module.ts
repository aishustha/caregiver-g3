import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PatientrecordPage } from './patientrecord.page'

const routes: Routes = [
  {
    path: '',
    component: PatientrecordPage,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientrecordPageRoutingModule {}

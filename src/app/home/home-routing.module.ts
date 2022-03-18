import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomePage } from './home.page'

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'addnewpatient',
        loadChildren: () =>
          import('../pages/addnewpatient/addnewpatient.module').then(
            m => m.AddnewpatientPageModule
          ),
      },
      {
        path: 'patientinfo',
        loadChildren: () =>
          import('../pages/patientinfo/patientinfo.module').then(m => m.PatientinfoPageModule),
      },
      {
        path: 'patientlist',
        loadChildren: () =>
          import('../pages/patientlist/patientlist.module').then(m => m.PatientlistPageModule),
      },
      {
        path: 'addpatientinfo',
        loadChildren: () =>
          import('../pages/addpatientinfo/addpatientinfo.module').then(
            m => m.AddpatientinfoPageModule
          ),
      },
      {
        path: 'patientrecord',
        loadChildren: () =>
          import('../pages/patientrecord/patientrecord.module').then(
            m => m.PatientrecordPageModule
          ),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AddpatientinfoPage } from './addpatientinfo.page'

const routes: Routes = [
  {
    path: '',
    component: AddpatientinfoPage,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddpatientinfoPageRoutingModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { PatientlistPageRoutingModule } from './patientlist-routing.module'

import { PatientlistPage } from './patientlist.page'

import { Ng2SearchPipeModule } from 'ng2-search-filter'

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PatientlistPageRoutingModule, Ng2SearchPipeModule],
  declarations: [PatientlistPage],
})
export class PatientlistPageModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { PatientinfoPageRoutingModule } from './patientinfo-routing.module'

import { PatientinfoPage } from './patientinfo.page'

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PatientinfoPageRoutingModule],
  declarations: [PatientinfoPage],
})
export class PatientinfoPageModule {}

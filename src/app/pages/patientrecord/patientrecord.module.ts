import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientrecordPageRoutingModule } from './patientrecord-routing.module';

import { PatientrecordPage } from './patientrecord.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PatientrecordPageRoutingModule],
  declarations: [PatientrecordPage],
})
export class PatientrecordPageModule {}

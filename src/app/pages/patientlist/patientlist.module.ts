import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientlistPageRoutingModule } from './patientlist-routing.module';

import { PatientlistPage } from './patientlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientlistPageRoutingModule
  ],
  declarations: [PatientlistPage]
})
export class PatientlistPageModule {}

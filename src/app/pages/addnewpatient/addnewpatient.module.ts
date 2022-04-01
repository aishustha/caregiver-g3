import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewpatientPageRoutingModule } from './addnewpatient-routing.module';

import { AddnewpatientPage } from './addnewpatient.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AddnewpatientPageRoutingModule],
  declarations: [AddnewpatientPage],
})
export class AddnewpatientPageModule {}

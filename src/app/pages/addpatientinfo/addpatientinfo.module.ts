import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpatientinfoPageRoutingModule } from './addpatientinfo-routing.module';

import { AddpatientinfoPage } from './addpatientinfo.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AddpatientinfoPageRoutingModule],
  declarations: [AddpatientinfoPage],
})
export class AddpatientinfoPageModule {}

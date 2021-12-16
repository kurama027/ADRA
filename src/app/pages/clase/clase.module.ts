import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClaseRoutingModule} from "./clase-routing.module";
import {ClaseComponent} from "./clase.component";
import { SociaComponent } from './socia/socia.component';

@NgModule({
  declarations: [ClaseComponent, SociaComponent],
  imports: [
    CommonModule,
    ClaseRoutingModule,
  ]
})
export class ClaseModule { }

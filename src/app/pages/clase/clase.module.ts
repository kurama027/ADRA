import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClaseRoutingModule} from "./clase-routing.module";
import {ClaseComponent} from "./clase.component";

@NgModule({
  declarations: [ClaseComponent],
  imports: [
    CommonModule,
    ClaseRoutingModule,
  ]
})
export class ClaseModule { }

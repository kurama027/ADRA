import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { CapacitacionComponent } from './capacitacion.component';
import { CapacitacionRoutingModule } from './capacitacion-routing.module';
import { CapacitacionService } from 'src/app/providers/services/capacitacion.service';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    CapacitacionComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CapacitacionRoutingModule
  ],
  providers: [CapacitacionService], // Los servicios se ponen en providers
})
export class CapacitacionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import { FormComponent } from './form/form.component';
import { SeminarioComponent } from './seminario.component';
import { SeminarioService } from 'src/app/providers/services/seminario.service';
import { SeminarioRoutingModule } from './seminario-routing.module';




@NgModule({
  declarations: [
    SeminarioComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SeminarioRoutingModule
  ],
  providers: [SeminarioService], // Los servicios se ponen en providers
})
export class SeminarioModule { }

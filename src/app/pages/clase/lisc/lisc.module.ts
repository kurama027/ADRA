
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { LiscRoutingModule } from './lisc-routing.module';
import { LiscService } from 'src/app/providers/services/lisc.service';
import { LiscComponent } from './lisc.component';





@NgModule({
  declarations: [
    LiscComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LiscRoutingModule
  ],
  providers: [LiscService], // Los servicios se ponen en providers
})
export class LiscModule {
}

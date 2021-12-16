import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { UserComponent } from './user.component';
import { UserService } from 'src/app/providers/services/user.service';
import { SeminarioRoutingModule } from '../seminario/seminario-routing.module';
import { UserRoutingModule } from './user.routing.module';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  providers: [UserService], // Los servicios se ponen en providers
})
export class UserModule { }

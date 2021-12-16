import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LiscComponent } from './lisc.component';

const routes: Routes = [
  {
    path: '',
    component: LiscComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiscRoutingModule {
}

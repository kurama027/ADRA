import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SeminarioComponent } from './seminario.component';

const routes: Routes = [
  {
    path: '',
    component: SeminarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeminarioRoutingModule {
}

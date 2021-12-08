import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClaseComponent} from "./clase.component";

const routes: Routes = [
  {
    path: '',
    component: ClaseComponent,
    children: [
      {
        path: 'capacitacion',
        loadChildren: () => import('src/app/pages/clase/capacitacion/capacitacion.module')
          .then(m => m.CapacitacionModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaseRoutingModule {
}

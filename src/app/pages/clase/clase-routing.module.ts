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
      },
      {
        path: 'seminario',
        loadChildren: () => import('src/app/pages/clase/seminario/seminario.module')
          .then(m => m.SeminarioModule),
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaseRoutingModule {
}

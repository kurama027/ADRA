import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./core/main-page/main-page.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    /*canActivate: [
      //  AuthenticationGuardService,
    ],*/
    // loadChildren: 'app/modules/modules.module#ModulesModule',
    children: [
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      },
      /*,
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }*/
      {
       path: 'clase',
        loadChildren: () => import('./pages/clase/clase.module')
          .then(m => m.ClaseModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

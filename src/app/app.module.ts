import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaseComponent } from './pages/clase/clase.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CapacitacionComponent } from './pages/clase/capacitacion/capacitacion.component';
import { SeminarioComponent } from './pages/clase/seminario/seminario.component';
import { ServicioEspiComponent } from './pages/clase/servicio-espi/servicio-espi.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './core/main-page/header/header.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CoreModule
  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

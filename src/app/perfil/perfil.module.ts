import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { HomeComponent } from './home/home.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';


@NgModule({
  declarations: [
    HomeComponent,
    SobreMiComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }

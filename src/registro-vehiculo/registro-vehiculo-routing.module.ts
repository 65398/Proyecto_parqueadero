import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroVehiculoComponent } from './registro-vehiculo.component';

const routes: Routes = [{ path: '', component: RegistroVehiculoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroVehiculoRoutingModule { }

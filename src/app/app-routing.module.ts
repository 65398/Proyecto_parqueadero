import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from 'src/navegacion/navegacion.component'; 
import { InicioComponent } from 'src/inicio/inicio.component';
import { IngresarComponent } from 'src/ingresar/ingresar.component';
import { ReservaComponent } from 'src/reserva/reserva.component';
import { ReporteComponent } from 'src/reporte/reporte.component';
import { DisponibilidadComponent } from 'src/disponibilidad/disponibilidad.component';
import { RegistroVehiculoComponent } from 'src/registro-vehiculo/registro-vehiculo.component';

const routes: Routes = [
  { path: '', redirectTo: 'ingresar', pathMatch: 'full'},
  { path: 'ingresar', component: IngresarComponent},
  { path: 'navegacion', component: NavegacionComponent},
{ path: 'inicio', component: InicioComponent },
{ path: 'disponibilidad', component: DisponibilidadComponent },
{ path: 'reporte', component: ReporteComponent },
{ path: 'registro-vehiculo', component: RegistroVehiculoComponent },
{path: 'reserva', component: ReservaComponent},
  { path: 'navegacion', loadChildren: () => import('../navegacion/navegacion.module').then(m => m.NavegacionModule) }, 
{ path: 'ingresar', loadChildren: () => import('../ingresar/ingresar.module').then(m => m.IngresarModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

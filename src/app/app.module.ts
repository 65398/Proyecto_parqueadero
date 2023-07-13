import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavegacionComponent } from 'src/navegacion/navegacion.component';
import { InicioComponent } from 'src/inicio/inicio.component';
import { IngresarComponent } from 'src/ingresar/ingresar.component';
import { DisponibilidadComponent } from 'src/disponibilidad/disponibilidad.component';
import { ReservaComponent } from 'src/reserva/reserva.component';
import { ReporteComponent } from 'src/reporte/reporte.component';
import { RegistroVehiculoComponent } from 'src/registro-vehiculo/registro-vehiculo.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InicioComponent,
    IngresarComponent,
    DisponibilidadComponent,
    ReservaComponent,
    ReporteComponent,
    RegistroVehiculoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

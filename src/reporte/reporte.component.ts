import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs, where, query, orderBy } from '@angular/fire/firestore';
import { RegistroVehiculos } from 'src/interfaces/registrovehiculos.interces';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent  {

  fecha: string = '';
  semana: string = '';
  mes: string = '';
  anio: number = 0;
  placa: string = '';
  registroVehiculo: RegistroVehiculos | null = null;

  constructor(private firestore: Firestore) {}

  async generarReporteDiario(form: NgForm) {
    if (form.valid) {
      // Aquí puedes implementar la lógica para generar el reporte diario
    }
  }

  async generarReporteSemanal(form: NgForm) {
    if (form.valid) {
      // Aquí puedes implementar la lógica para generar el reporte semanal
    }
  }

  async generarReporteMensual(form: NgForm) {
    if (form.valid) {
      // Aquí puedes implementar la lógica para generar el reporte mensual
    }
  }

  async generarReporteAnual(form: NgForm) {
    if (form.valid) {
      // Aquí puedes implementar la lógica para generar el reporte anual
    }
  }

  async consultarVehiculo(form: NgForm) {
    if (form.valid) {
      const registroVehiculoQuery = query(
        collection(this.firestore, 'RegistroVehiculos'),
        where('placa', '==', this.placa),
        orderBy('fecha', 'desc')
      );
      const registroVehiculoSnapshot = await getDocs(registroVehiculoQuery);
  
      if (!registroVehiculoSnapshot.empty) {
        const registroVehiculoData = registroVehiculoSnapshot.docs[0].data();
        this.registroVehiculo = registroVehiculoData as RegistroVehiculos;
      } else {
        this.registroVehiculo = null;
      }
    }
  }
  
}
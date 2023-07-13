import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistroVehicularServices } from 'src/services/registrovehicular.services';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro-vehiculo',
  templateUrl: './registro-vehiculo.component.html',
  styleUrls: ['./registro-vehiculo.component.css']
})
export class RegistroVehiculoComponent  {
  registroForm!: FormGroup ;
isRegistroSuccessful:boolean = false;
  constructor(private registroVehicularServices: RegistroVehicularServices, private formBuilder: FormBuilder) {}
  ngOnInit() {
  this.registroForm = this.formBuilder.group({
  Tipo_Vehiculo: new FormControl('', Validators.required),
  marca: new FormControl('', Validators.required),
  anio: new FormControl('', Validators.required),
  color: new FormControl('', Validators.required),
  placa: new FormControl('', Validators.required),
});
}
  async submitForm() {
    console.log(this.registroForm.value);
      const response = await this.registroVehicularServices.addPlace(this.registroForm.value);
      console.log(response);

      if (response) {
        alert('Gracias, su vehículo se registró exitosamente.');
     
        
      } else {
        console.log('Hubo un error al enviar el mensaje.');
      }

  }

}

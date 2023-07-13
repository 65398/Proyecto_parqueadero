import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservaServices } from 'src/services/reserva.services';
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  isRegistroSuccessful:boolean = false;
  registroForm!: FormGroup ;
  constructor(private reservaServices: ReservaServices, private formBuilder: FormBuilder) {}
  ngOnInit() {
  this.registroForm = this.formBuilder.group({
  fecha: new FormControl('', Validators.required),
  hora: new FormControl('', Validators.required),
  espacio: new FormControl('', Validators.required),
  tiempo: new FormControl('', Validators.required),
});
}
async submitForm() {
  console.log(this.registroForm.value);
    const response = await this.reservaServices.addPlace(this.registroForm.value);
    console.log(response);

    if (response) {
      alert('Gracias su reserva se envio correctamente.');
   
      
    } else {
      console.log('Hubo un error al enviar el mensaje.');
    }

}
}


 


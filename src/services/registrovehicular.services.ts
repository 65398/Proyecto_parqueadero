import { Injectable } from "@angular/core";
import { Firestore, addDoc } from "@angular/fire/firestore";
import { collection } from "firebase/firestore";
import { RegistroVehiculos } from "src/interfaces/registrovehiculos.interces";
@Injectable({
    providedIn: 'root'
})
export class RegistroVehicularServices {
    constructor(private firestore: Firestore){}
    addPlace(registroVehiculos: RegistroVehiculos){
       const placeRef = collection(this.firestore, 'RegistroVehiculos');
       return addDoc(placeRef, registroVehiculos);
    }
    }

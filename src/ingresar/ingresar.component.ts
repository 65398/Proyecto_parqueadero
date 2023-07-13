import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PlacesService } from 'src/services/places.service';
import{FormGroup, FormControl} from '@angular/forms'


@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  formLogin: FormGroup;
  formReg: FormGroup;
  showErrorMessage: boolean | undefined;
  constructor(private PlacesService: PlacesService, private router: Router) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
    
  }
    ngOnInit(): void {
    }

    onSubmit() {
      this.PlacesService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        alert('Registro exitoso');
        this.router.navigate(['/ingresar']);
        })
    .catch(error => console.log(error));
    }


  handleSignIn(): void {
    const signInElement = document.querySelector('.sign-in');
    const signUpElement = document.querySelector('.sign-up');
    if (signInElement && signUpElement) {
      signInElement.classList.toggle('active');
      signUpElement.classList.toggle('active');
    }
  }
  handleSignUp(): void {
    const signInElement = document.querySelector('.sign-in');
    const signUpElement = document.querySelector('.sign-up');
    if (signInElement && signUpElement) {
      signInElement.classList.toggle('active');
      signUpElement.classList.toggle('active');
    }
  }

  onValidar() {
    this.PlacesService.iniciosesion(this.formLogin.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/inicio']);
    })
    .catch(error => console.log(error));
    this.showErrorMessage = true;
}
onClick() {
  this.PlacesService.loginWithGoogle()
    .then(response => {
      console.log(response);
      this.router.navigate(['/inicio']);
    })
    .catch(error=> console.log(error))
}

}

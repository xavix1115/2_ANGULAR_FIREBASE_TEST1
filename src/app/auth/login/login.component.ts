import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//Servicio Autenticacion 
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    AuthService
  ],
})
export class LoginComponent implements OnInit {

  //Instancia
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authSvc:AuthService) { }

  ngOnInit(): void {
  }

  //Funcion
  onlogin(){
    console.log("Form ", this.loginForm.value);
    const {email, password} = this.loginForm.value;
    this.authSvc.login(email, password);
  }

}

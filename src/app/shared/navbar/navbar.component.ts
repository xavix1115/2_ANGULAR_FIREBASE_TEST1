import { Component, OnInit } from '@angular/core';
//Servicio de autenticacion
import { AuthService } from './../../auth/services/auth.service';
import { CONTENT_ATTR } from '@angular/compiler';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  
//Variable si esta logiado
public isLogged = false;
public user: any;

  constructor(private authSvc:AuthService) { }

  async ngOnInit() {
    console.log("navbar");
    //Peticion usuario
    this.user = await this.authSvc.getCurrentUser();
    //Validacion
    if (this.user){
      this.isLogged = true;
    }
  }

}

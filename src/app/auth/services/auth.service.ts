
import { Injectable } from '@angular/core';

//Node_Modulos uso para obtener usaurio
import { first, concatAll } from 'rxjs/operators';
//Servicios Firebase | servicio auth | app modules tambien
import { auth } from 'firebase/app';
import { User } from 'firebase/';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()

export class AuthService {

  
  public user: User;


  constructor(public afAuth: AngularFireAuth) { }



  async login(email:string, password: string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch(error){
      console.log(error);
    }
  }

  async register(email: string, password: string){
    try{
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return result;
    } catch(error){
      console.log(error);
    }
  }

  async logout(){
    try{
      await this.afAuth.signOut();
    }catch(error){
      console.log(error); 
    }
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

}



/*


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}

*/
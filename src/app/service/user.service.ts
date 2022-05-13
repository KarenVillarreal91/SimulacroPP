import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userLogueado:any = false;

  constructor(private auth:AngularFireAuth) 
  {}
  
  Login(user:any)
  {
    return this.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  LogOut()
  {
    return this.auth.signOut();
  }
}

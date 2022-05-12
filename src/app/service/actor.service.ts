import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private firestore:AngularFirestore) { }


  SubirActor(user: any)
  {
    return this.firestore.collection('actores').add(user);
  }
}

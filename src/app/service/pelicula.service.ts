import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private firestore:AngularFirestore) { }

  TraerPeliculas()
  {
    return this.firestore.collection('peliculas').valueChanges({idField: "id"});
  }
}

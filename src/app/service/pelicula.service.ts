import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private firestore:AngularFirestore, private storage:AngularFireStorage) 
  { }

  TraerPeliculas()
  {
    return this.firestore.collection('peliculas').valueChanges({idField: "id"});
  }

  async SubirPelicula(pelicula: any, formData:FormData)
  {
    let path = `fotos/${Date.now()}`;

    await this.storage.upload(path, formData.get('foto'));

    this.storage.ref(path).getDownloadURL().subscribe((data)=>{
      pelicula.foto = data;
      this.firestore.collection('peliculas').add(pelicula);
    });
  }
}

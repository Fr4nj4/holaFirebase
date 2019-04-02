import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Artista} from '../interfaces/artistas.interface';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  artistaCollection: AngularFirestoreCollection<Artista>;
  artistas: Observable<any[]>;
  artistaDoc: AngularFirestoreDocument<Artista>;


  constructor(afs: AngularFirestore) {

    // this.artistas = afs.collection('artistas-fav').valueChanges();
    this.artistaCollection = afs.collection<Artista>('artistas-fav');
    this.artistas = this.artistaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Artista;
        const id = a.payload.doc.id;

        return {id, ... data };
      }))
    );

   }

   getArtistas() {
     return this.artistas;
   }


   addArtista(artista: any) {
    this.artistaCollection.add(artista);
   }

   deleteArtista() {

   }

   updateArtista() {

   }
}

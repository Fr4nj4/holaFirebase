import { Component, OnInit } from '@angular/core';
import {Artista} from '../../../core/interfaces/artistas.interface';
import {ArtistasService} from '../../../core/services/artistas.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {

  constructor(public artistaServices: ArtistasService) { }

  artista: Artista = {
    nombre: '',
    genero: '',
    cancionFavorita: '',
    url_imagenartista: ''
  };

  listadoArtistas: Array<Artista> = [];

  ngOnInit() {
   this.artistaServices.getArtistas().subscribe( items => {
     this.listadoArtistas = items;
      console.log(items);
    });
  }

  guardarRegistro(form: NgForm) {
    console.log(form);
    this.artistaServices.addArtista(this.artista);

  }

}

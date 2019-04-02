import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {


  usuario: any = {
    estatus: '',
    nombrePerfil: '',
    aplicaVigencia: '',
    vigenteDe: '',
    vigenteA: ''
  };



  respuestaServicio = [
    {
      "estatus": "A",
      "idPerfil": 2,
      "idRegion": 2,
      "descripcion": "ADMON",
      "vigencia": "1",
      "fechaIniVig": "2019-03-24",
      "fechaFinVig": "2019-03-24",
      "fechaCreacion": null,
      "usuarioCreacion": null,
      "fechaModificacion": null,
      "usuarioModificacion": null,
      "menusPerfil": null
    }
  ];

  constructor() { }

  ngOnInit() {
  }


  


  guardarRegistro(artista){

  }
}

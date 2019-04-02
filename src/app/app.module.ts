import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { ArtistasComponent } from './modules/forms/artistas/artistas.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { environment } from 'src/environments/environment';
import {AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import {ArtistasService} from './core/services/artistas.service';
import {FormsModule} from '@angular/forms';
import { UsuarioComponent } from './modules/usuario/usuario.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistasComponent,
    NavbarComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'holaFirebase'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [ArtistasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

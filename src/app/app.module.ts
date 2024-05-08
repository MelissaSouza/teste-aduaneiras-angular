import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importe o RouterModule

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Supondo que você tenha um AppRoutingModule com suas rotas

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule], // Adicione o RouterModule aqui
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

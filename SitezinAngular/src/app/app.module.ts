import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { AppRountingModule } from './app-routing.module';
import { PaginaUmModule } from './pages/pagina-um/pagina-um.module';
import { PaginaDoisModule } from './pages/pagina-dois/pagina-dois.module';
import { FormsModule } from '@angular/forms';
import { MeuBotaoModule } from './pages/meu-botao/meu-botao.module';

@NgModule({
  
  imports: [
    FormsModule,
    BrowserModule,
    HomeModule,
    AppRountingModule,
    PaginaUmModule,
    PaginaDoisModule,
    MeuBotaoModule
  ],

  declarations: [
    AppComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

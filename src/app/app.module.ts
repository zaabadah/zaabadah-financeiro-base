import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";//banco de dados virtual, retirar esta linha quando for real
import { InMemoryDatabase } from "src/app/pages/in-memory-database";//banco de dados virtual, retirar esta linha quando for real


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)//banco de dados virtual, retirar esta linha quando for real
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

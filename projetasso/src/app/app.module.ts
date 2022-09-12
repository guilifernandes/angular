import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { PRODUTOSHtmlComponent } from './produtos.html/produtos.html.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    PRODUTOSHtmlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

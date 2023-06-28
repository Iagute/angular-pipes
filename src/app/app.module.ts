import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ContraseñaPipe } from './pipes/contraseña.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    ContraseñaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

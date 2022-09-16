import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArrayFromNumberModule } from 'src/app/pipes/array-from-number.pipe';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ArrayFromNumberModule

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ca' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

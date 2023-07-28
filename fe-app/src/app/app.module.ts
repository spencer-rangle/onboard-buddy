import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environments';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

export const OPENAI_API_KEY = new InjectionToken<string>('OPENAI_API_KEY');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    { provide: OPENAI_API_KEY, useValue: environment.OPENAI_API_KEY },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

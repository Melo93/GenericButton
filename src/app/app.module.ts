import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GenericButtonComponent } from './generic-button/generic-button.component';
import { Button1Component } from './button1/button1.component';
import { Button2Component } from './button2/button2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GenericButtonComponent, Button1Component, Button2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

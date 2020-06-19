import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

import {Baitap1Module} from './baitap1/baitap1.module'
import {Baitap2Module} from './baitap2/baitap2.module'
import { DataBindingModule } from './data-binding/data-binding.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    Baitap1Module,
    Baitap2Module,
    DataBindingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

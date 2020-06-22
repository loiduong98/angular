import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

import {Baitap1Module} from './baitap1/baitap1.module'
import {Baitap2Module} from './baitap2/baitap2.module'
import { DataBindingModule } from './data-binding/data-binding.module';
import { DirectivesModule } from './directives/directives.module';
import { Baitap6Module } from './baitap6/baitap6.module';

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
    DirectivesModule,
    Baitap6Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

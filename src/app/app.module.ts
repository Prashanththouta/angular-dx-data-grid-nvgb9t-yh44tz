import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { DxDataGridModule } from 'devextreme-angular';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DxDataGridModule ],
  declarations: [ AppComponent, HelloComponent, GridComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcultriceComponent } from './calcultrice/calcultrice.component';
import { HistoryCalcComponent } from './history-calc/history-calc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalcultriceComponent,
    HistoryCalcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CalcultriceComponent]
})
export class AppModule { }

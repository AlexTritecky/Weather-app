import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastInfoComponent } from './forecast-info.component';
import {MatTableModule} from '@angular/material/table';
import { ButtonsModule } from '@shared/buttons';



@NgModule({
  declarations: [ForecastInfoComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ButtonsModule
  ],
  exports:[ForecastInfoComponent]
})
export class ForecastInfoModule { }

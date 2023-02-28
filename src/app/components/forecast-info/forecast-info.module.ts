import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastInfoComponent } from './forecast-info.component';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
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

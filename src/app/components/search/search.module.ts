import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ButtonsModule } from '@shared/buttons';
import { ControlsModule } from '@shared/controls';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    ControlsModule,
    ButtonsModule,
    ReactiveFormsModule
  ],
  exports:[SearchComponent]
})
export class SearchModule { }

import { NgModule } from "@angular/core";
import { ButtonsComponent } from "./buttons.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ButtonsComponent],
  imports: [CommonModule],
  exports: [ButtonsComponent],
})
export class ButtonModule {}

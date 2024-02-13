import { Component, Input } from '@angular/core';
import { BUTTON_TYPES_ENUM, ButtonType } from '@enum//button-type.enum';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent {
  @Input() type: ButtonType;
  constructor() {
    this.type = BUTTON_TYPES_ENUM.BUTTON;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ButtonType, BUTTON_TYPES_ENUM } from '@enum//button-type.enum';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: ButtonType;
  constructor() {
    this.type = BUTTON_TYPES_ENUM.BUTTON;
   }

  ngOnInit(): void {
  }

}

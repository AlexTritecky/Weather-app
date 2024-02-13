import { Component, EventEmitter, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ButtonType, BUTTON_TYPES_ENUM } from '@enum//button-type.enum';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  form: UntypedFormGroup;
  submit: ButtonType = BUTTON_TYPES_ENUM.SUBMIT;

  @Output() addZipCode: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      zipCode: [
        null,
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
    });
  }

  get zipCode() {
    return this.form.get('zipCode');
  }

  onSubmit(): void {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }
    const zipCodeValue = this.zipCode?.value ?? '';
    this.addZipCode.emit(zipCodeValue);
    this.form.reset();
  }
}

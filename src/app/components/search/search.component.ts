import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ButtonType, BUTTON_TYPES_ENUM } from '@enum//button-type.enum';
import { ZipCodesStorageService } from '@services/zip-codes/zip-codes-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  form!: UntypedFormGroup;
  submit: ButtonType;

  @Output() addZipCode: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: UntypedFormBuilder) {
    this.submit = BUTTON_TYPES_ENUM.SUBMIT;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      zipCode: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(5),
          ],
        },
      ],
    });
  }
  get zipCode() {
    return this.form.get('zipCode')!;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      for (const control of Object.keys(this.form.controls)) {
        this.form.controls[control].markAsTouched();
      }
      return;
    }
    this.addZipCode.emit(this.form.value.zipCode);
    this.form.reset();
  }
}

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZipCodesStorageService } from './zip-codes-storage.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ZipCodesStorageModule {
  static forRoot(): ModuleWithProviders<ZipCodesStorageModule> {
    return {
      ngModule: ZipCodesStorageModule,
      providers: [ZipCodesStorageService],
    };
  }
}

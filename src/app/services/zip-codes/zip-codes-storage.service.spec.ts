import { TestBed } from '@angular/core/testing';

import { ZipCodesStorageService } from './zip-codes-storage.service';

describe('ZipCodesStorageService', () => {
  let service: ZipCodesStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZipCodesStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

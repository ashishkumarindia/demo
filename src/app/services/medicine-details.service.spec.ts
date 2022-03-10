import { TestBed } from '@angular/core/testing';

import { MedicineDetailsService } from './medicine-details.service';

describe('MedicineDetailsService', () => {
  let service: MedicineDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

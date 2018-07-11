import { TestBed, inject } from '@angular/core/testing';

import { BusinessCashAdvanceService } from './business-cash-advance.service';

describe('BusinessCashAdvanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessCashAdvanceService]
    });
  });

  it('should be created', inject([BusinessCashAdvanceService], (service: BusinessCashAdvanceService) => {
    expect(service).toBeTruthy();
  }));
});

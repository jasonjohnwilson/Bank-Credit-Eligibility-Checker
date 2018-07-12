import { TestBed, inject } from '@angular/core/testing';

import { ToastrService } from './toastr.service';
import { JQ_TOKEN } from './jquery.service';
import { TOASTR_TOKEN } from './toastr.token';

const jQuery: any = window['$'];
const toastr: any = window['toastr'];

describe('ToastrServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastrService,
        { provide: JQ_TOKEN, useValue: jQuery },
    { provide: TOASTR_TOKEN, useValue: toastr }]
    });
  });

  it('should be created', inject([ToastrService], (service: ToastrService) => {
    expect(service).toBeTruthy();
  }));
});

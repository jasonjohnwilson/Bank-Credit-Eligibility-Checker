import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EligibilityComponent } from './eligibility.component';
import { ToastrService } from '../core/services/toastr.service';
import { BusinessCashAdvanceService } from './business-cash-advance.service';
import { JQ_TOKEN } from '../core/services/jquery.service';
import { TOASTR_TOKEN } from '../core/services/toastr.token';

const jQuery: any = window['$'];
const toastr: any = window['toastr'];

describe('EligibilityComponent', () => {
  let component: EligibilityComponent;
  let fixture: ComponentFixture<EligibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ EligibilityComponent ],
      providers: [
        ToastrService,
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: TOASTR_TOKEN, useValue: toastr },
        BusinessCashAdvanceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

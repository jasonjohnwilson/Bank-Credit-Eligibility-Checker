import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../core/services/toastr.service';
import { IBusinessInput } from './business-input.type';
import { BusinessCashAdvanceService } from './business-cash-advance.service';

@Component({
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent {
  businessInput: IBusinessInput;
  filename: string;
  constructor(
    private toastrService: ToastrService,
    private businessCashAdvanceService: BusinessCashAdvanceService
  ) { }

  checkEligibility() {
    const eligible = this.businessCashAdvanceService.checkEligibility(this.businessInput);
    if (eligible) {
      this.toastrService.success('Based on your input file the system has determined you are eligible!', 'BCA Eligibility Result');
    } else {
      this.toastrService.warning('Unfortunately based on your input file you do not meet the BCA criteria', 'BCA Eligibility Result');
    }
  }

  resetFile() {
    this.businessInput = null;
    this.filename = '';
  }

  fileSelect(event) {
    const reader = new FileReader();
    try {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        reader.readAsText(file);
        reader.onload = () => {
          try {
            this.filename = file.name;
            console.log(file.name);
            this.businessInput = <IBusinessInput>JSON.parse(reader.result.toString());
          } catch (e) {
            this.toastrService.error('The file submitted is not in the correct format');
            this.filename = '';
          }
        };
      }
    } catch (e) {
      this.toastrService.error('The file submitted is not in the correct format');
      this.filename = '';
    }
  }
}

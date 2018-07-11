import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { EligibilityComponent } from './eligibility.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BusinessCashAdvanceService } from './business-cash-advance.service';

const routes: Routes =
[
  { path: '', component: EligibilityComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EligibilityComponent],
  providers: [BusinessCashAdvanceService]
})
export class EligibilityModule { }

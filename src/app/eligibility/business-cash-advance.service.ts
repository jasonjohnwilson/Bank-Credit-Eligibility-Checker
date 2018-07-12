import { Injectable } from '@angular/core';
import { IBusinessInput } from './business-input.type';
import { IEligibilityRule } from './eligibility-rule.type';
import { AmountAboveValueMustHaveTransactionsForLast12Months } from './rules/amount-above-value-must-have-transactions-for-last12-months';
import { AmountRequestedInAllowedRange } from './rules/amount-requested-in-allowed-range';
import { BusinessOperatingForGreaterThan } from './rules/business-operating-for-greater-than';
import {
  TransactionAverageInEachMonthMustExceedRequestedAmount
} from './rules/transaction-average-in-each-month-must-exceed-requested-amount';

@Injectable()
export class BusinessCashAdvanceService {
  eligibilityRules: IEligibilityRule[] = [
    new AmountAboveValueMustHaveTransactionsForLast12Months(25000),
    new AmountRequestedInAllowedRange(5000, 50000),
    new BusinessOperatingForGreaterThan(12),
    new TransactionAverageInEachMonthMustExceedRequestedAmount()];

  constructor() { }

  checkEligibility(businessInput: IBusinessInput): boolean {
    debugger;
    const anyIneligible = this.eligibilityRules.some(rule => {
      return rule.isValid(businessInput) === false;
    });

    return !anyIneligible;
  }
}

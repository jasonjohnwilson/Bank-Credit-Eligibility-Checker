import { IEligibilityRule } from '../eligibility-rule.type';
import { IBusinessInput } from '../business-input.type';

// The amount requested is between 5,000 and 50,000 inclusive
export class AmountRequestedInAllowedRange implements IEligibilityRule {
    constructor(private minAmount: number, private maxAmount: number) {
    }

    isValid(businessInput: IBusinessInput): boolean {
        if (businessInput.amountRequested >= this.minAmount
            && businessInput.amountRequested <= this.maxAmount) {
            return true;
        } else {
            return false;
        }
    }
}

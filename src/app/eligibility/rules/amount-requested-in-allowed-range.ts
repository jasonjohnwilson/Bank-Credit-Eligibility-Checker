import { IEligibilityRule } from '../eligibility-rule.type';
import { IBusinessInput } from '../business-input.type';

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

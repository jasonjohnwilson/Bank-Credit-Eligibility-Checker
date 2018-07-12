import { IEligibilityRule } from '../eligibility-rule.type';
import { IBusinessInput } from '../business-input.type';

// The business must have been operating for more than 12 months
export class BusinessOperatingForGreaterThan implements IEligibilityRule {
    constructor(private numberOfMonths: number) {
    }

    isValid(businessInput: IBusinessInput): boolean {
        if ((businessInput.timeInBusiness.years * 12) +  businessInput.timeInBusiness.months >= this.numberOfMonths) {
            return true;
        } else {
            return false;
        }
    }
}

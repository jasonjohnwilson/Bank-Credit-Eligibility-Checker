import { IBusinessInput } from './business-input.type';

export interface IEligibilityRule {
    isValid(businessInput: IBusinessInput): boolean;
}

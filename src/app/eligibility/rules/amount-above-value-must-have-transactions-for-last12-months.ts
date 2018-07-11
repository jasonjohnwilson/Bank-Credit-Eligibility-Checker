import { getMonthlyTotals } from '../eligibility.functions';
import { IEligibilityRule } from '../eligibility-rule.type';
import { IBusinessInput } from '../business-input.type';

export class AmountAboveValueMustHaveTransactionsForLast12Months implements IEligibilityRule {
    constructor(private amountsAbove: number) {}

    isValid(businessInput: IBusinessInput): boolean {

        if (businessInput.amountRequested > this.amountsAbove) {
            const monthlyTransactions = getMonthlyTotals(businessInput);
            if (monthlyTransactions.monthIndexes.length < 12) {
                return false;
            } else {
                const last12Indexes = monthlyTransactions.monthIndexes.splice(0, 12);

                const hasZeroTransactionMonths = last12Indexes.some(index => {
                    return monthlyTransactions.monthDictionary[index].totalAmount === 0
                        || monthlyTransactions.monthDictionary[index].assumedValue;
                });

                return !hasZeroTransactionMonths;
            }
        } else {
            return true;
        }
    }
}


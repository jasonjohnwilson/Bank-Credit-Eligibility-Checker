import { IEligibilityRule } from '../eligibility-rule.type';
import { IBusinessInput } from '../business-input.type';
import { ITransaction } from '../transaction.type';
import { getMonthlyTotals } from '../eligibility.functions';

// The transaction average in each month must exceed the requested amount
export class TransactionAverageInEachMonthMustExceedRequestedAmount implements IEligibilityRule {

    isValid(businessInput: IBusinessInput): boolean {
        const monthlyTransactions = getMonthlyTotals(businessInput);

        const anyMonthsInvalid = monthlyTransactions.monthIndexes.some(index => {
            const month = monthlyTransactions.monthDictionary[index];
            return month.totalAmount / month.numberOfTransactions < businessInput.amountRequested;
        });

        return !anyMonthsInvalid;
    }
}


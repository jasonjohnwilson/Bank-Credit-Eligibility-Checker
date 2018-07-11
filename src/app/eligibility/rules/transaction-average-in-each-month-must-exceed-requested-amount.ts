import { IEligibilityRule } from '../eligibility-rule.type';
import { IBusinessInput } from '../business-input.type';
import { ITransaction } from '../transaction.type';
import { getMonthlyTotals } from '../eligibility.functions';

// Comment: rule seems to contradict rule -
// If there are no transactions in a month for the last 12 months, then the assumed
// transaction value for that month is the average of all other months that do have transactions.
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


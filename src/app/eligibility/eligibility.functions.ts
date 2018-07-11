import { IBusinessInput } from './business-input.type';
import { IMonthsAndIdexes, IDictionary } from './month-transactions.type.type';
import { ITransaction } from './transaction.type';

export function getMonthlyTotals(businessInput: IBusinessInput): IMonthsAndIdexes {
    const monthlyTotal: IDictionary = {};
    const indexes: number[] = [];

    businessInput.transactions
        .forEach((transaction: ITransaction) => {
            const date = new Date(transaction.date);
            const index = -1;
            parseInt(date.getFullYear() + '' + date.getMonth(), index);

            if (monthlyTotal[index] != null) {
                monthlyTotal[index].numberOfTransactions += 1;
                monthlyTotal[index].totalAmount += transaction.value;
            } else {
                indexes.push(<number>index);
                monthlyTotal[index] = {
                    numberOfTransactions: 1,
                    totalAmount: transaction.value,
                    assumedValue: false
                };
            }
        });

    const months = {
        monthDictionary: monthlyTotal,
        monthIndexes: sortAscending(indexes)
    };

    if (anyMonthInLast12MonthsWithZeroTransaction(months)) {
        const monthlyAverage = getMonthlyAverage(months);
        defaultZeroMonthsToAverage(months, monthlyAverage);
    }

    return months;
}

export function defaultZeroMonthsToAverage(months: IMonthsAndIdexes, average: number) {
    const indexes = months.monthIndexes.splice(0, 12);
    indexes.forEach(index => {
        if (months.monthDictionary[index].totalAmount === 0) {
            months.monthDictionary[index].totalAmount = average;
            months.monthDictionary[index].assumedValue = true;
        }
    });
}

export function anyMonthInLast12MonthsWithZeroTransaction(months: IMonthsAndIdexes): boolean {
    let any = false;

    months.monthIndexes.reverse().splice(0, 12).forEach(index => {
        if (months.monthDictionary[index].totalAmount === 0) {
            any = true;
        }
    });

    return any;
}

export function getMonthlyAverage(months: IMonthsAndIdexes): number {
    let totalMonthsWithTransactions = 0;
    let totalTransactionAmount = 0;

    // would need to clarify if it was only average of last 12 months or all months?
    months.monthIndexes.forEach(index => {
        if (months.monthDictionary[index].totalAmount > 0) {
            totalMonthsWithTransactions += 1;
            totalTransactionAmount += months.monthDictionary[index].totalAmount;
        }
    });

    return totalTransactionAmount / totalMonthsWithTransactions;
}

export function sortAscending(indexes: number[]): number[] {
    return indexes.sort((a: any, b: any) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
}

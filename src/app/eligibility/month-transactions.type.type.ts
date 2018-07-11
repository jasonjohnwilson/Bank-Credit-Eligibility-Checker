export interface IMonthlyTransactions {
    numberOfTransactions: number;
    totalAmount: number;
    assumedValue: boolean;
}

export interface IDictionary {
    [key: string]: IMonthlyTransactions;
}

export interface IMonthsAndIdexes {
    monthDictionary: IDictionary;
    monthIndexes: number[];
}

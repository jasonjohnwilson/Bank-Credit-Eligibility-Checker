import { ITimeInBusiness } from './time-in-business.type';
import { ITransaction } from './transaction.type';

export interface IBusinessInput {
    amountRequested: number;
    timeInBusiness: ITimeInBusiness;
    transactions: ITransaction[];
}

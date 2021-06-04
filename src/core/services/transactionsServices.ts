import api from './utils/http';
import { ITransaction } from '../reducers/transactionsReducer';

interface transactionsResponse {
  transactions: ITransaction[];
}

interface transactionResponse {
  transaction: ITransaction;
}

export async function fetchTransactions(): Promise<transactionsResponse> {
  return await api.get(`/transactions`);
}

export async function saveTransaction(data: ITransaction): Promise<transactionResponse> {
  return await api.post(`/transactions`, data);
}

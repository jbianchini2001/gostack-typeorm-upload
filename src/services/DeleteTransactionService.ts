import { response } from 'express';
import { getCustomRepository, TransactionRepository } from 'typeorm';

import AppError from '../errors/AppError';

// import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';
import transactionsRouter from '../routes/transactions.routes';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist.');
    }
    await transactionRepository.remove(transaction);
  }
}

export default DeleteTransactionService;

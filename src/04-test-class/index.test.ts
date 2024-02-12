// Uncomment the code below and write your tests
import { InsufficientFundsError, TransferFailedError, getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initial_balance = 1;
    const account = getBankAccount(initial_balance);
    expect(account.getBalance()).toBe(initial_balance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const initial_balance = 1;
    const account = getBankAccount(initial_balance);
    expect(() => account.withdraw(20)).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const initial_balance = 1;
    const account = getBankAccount(initial_balance);
    const account2 = getBankAccount(0);
    expect(() => account.transfer(20, account2)).toThrowError(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const initial_balance = 20;
    const account = getBankAccount(initial_balance);
    expect(() => account.transfer(10, account)).toThrowError(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    const initial_balance = 20;
    const account = getBankAccount(initial_balance);
    const amount = 10;
    account.deposit(amount);
    expect(account.getBalance()).toBe(initial_balance + amount);
  });

  test('should withdraw money', () => {
    const amount = 10;
    const initial_balance = 20;
    const account = getBankAccount(initial_balance);
    account.withdraw(amount);
    expect(account.getBalance()).toBe(initial_balance - amount);
  });

  test('should transfer money', () => {
    const amount = 10;
    const initial_balance = 20;
    const initial_balance2 = 230;
    const account = getBankAccount(initial_balance);
    const account2 = getBankAccount(initial_balance2);
    account.transfer(amount, account2);
    expect(account.getBalance()).toBe(initial_balance - amount);
    expect(account2.getBalance()).toBe(initial_balance2 + amount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    //
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(100);
    const new_balance = 120;

    account.fetchBalance = jest.fn().mockResolvedValue(new_balance);
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(new_balance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // onst account = getBankAccount(0);
  });
});

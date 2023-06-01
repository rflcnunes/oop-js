import { AccountTypes } from "./enums/AccountTypes.js";

class Account {
  static totalAccounts = 0;

  constructor(client, agency, accountType = AccountTypes.CURRENT, balance = 0) {
    this._client = client;
    this._agency = agency;
    this._balance = balance;
    this._accountType = accountType;
    Account.totalAccounts++;
  }

  validateAmount(value) {
    if (value <= 0 || typeof value !== "number") {
      return false;
    }

    return true;
  }

  verifyFunds(value) {
    if (this._balance < value) {
      return false;
    }

    return true;
  }

  get client() {
    return this._client;
  }

  get agency() {
    return this._agency;
  }

  get balance() {
    return this._balance;
  }

  set client(newValue) {
    if (newValue instanceof Client) {
      this._client = newValue;
    }
  }

  set balance(value) {
    if (!this.validateAmount(value)) {
      return;
    }
    this._balance = value;
  }

  get accountType() {
    return this._accountType;
  }

  deposit(value) {
    if (!this.validateAmount(value)) {
      return;
    }

    this._balance += value;
    return value;
  }

  withdraw(value) {
    if (!this.validateAmount(value)) {
      return;
    }

    if (!this.verifyFunds(value)) {
      console.log("Insufficient funds");
      return;
    }

    this._balance -= value;
    return value;
  }

  transfer(destinationAccount, value) {
    if (!this.validateAmount(value)) {
      return;
    }

    if (!this.verifyFunds(value)) {
      console.log("Insufficient funds");
      return;
    }

    this._balance -= value;
    destinationAccount.balance += value;

    return { value, from: this, to: destinationAccount, status: "success" };
  }
}

export { Account };

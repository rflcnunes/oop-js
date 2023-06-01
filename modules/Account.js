import { AccountTypes } from "./enums/AccountTypes.js";

class Account {
  constructor(client, agency, accountType = AccountTypes.CURRENT, balance = 0) {
    this._client = client;
    this._agency = agency;
    this._balance = balance;
    this._accountType = accountType;
  }

  validateAmount(value) {
    if (value <= 0) {
      console.log("Invalid value");
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
    console.log("Deposit of R$", value, "made by", this._client.name);
    return value;
  }

  withdraw(value) {
    if (!this.validateAmount(value)) {
      return;
    }

    if (this._balance < value) {
      console.log("Insufficient funds");
      return;
    }

    this._balance -= value;
    console.log("Withdrawal of R$", value, "made by", this._client.name);
    return value;
  }

  transfer(destinationAccount, value) {
    if (!this.validateAmount(value)) {
      return;
    }

    if (this._balance < value) {
      console.log("Insufficient funds");
      return;
    }

    this._balance -= value;
    destinationAccount.balance += value;

    console.log(
      "Transfer of R$",
      value,
      "from",
      this._client.name,
      "to",
      destinationAccount.client.name
    );
    return value;
  }
}

export { Account };

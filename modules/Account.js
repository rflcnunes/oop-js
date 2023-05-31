import { AccountTypes } from "./enums/AccountTypes.js";
class Account {
  constructor(client, agency, accountType = AccountTypes.CURRENT, balance = 0) {
    this.client = client;
    this.agency = agency;
    this.balance = 0;
    this.accountType = accountType;
  }

  deposit(value) {
    if (value <= 0) {
      console.log("Invalid value");

      return;
    }

    this.balance += value;

    console.log("Deposit of R$", value, "made by", this.client.name);

    return value;
  }

  withdraw(value) {
    if (this.balance < value) {
      console.log("Insufficient funds");

      return;
    }

    this.balance -= value;

    console.log("Withdrawal of R$", value, "made by", this.client.name);

    return value;
  }
}

export { Account };

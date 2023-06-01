import { AccountTypes } from "./enums/AccountTypes.js";

class Account {
  constructor(client, agency, accountType = AccountTypes.CURRENT, balance = 0) {
    this.client = client;
    this.agency = agency;
    this.balance = balance;
    this.accountType = accountType;
  }

  validateAmount(value) {
    if (value <= 0) {
      console.log("Invalid value");
      return false;
    }
    return true;
  }

  deposit(value) {
    if (!this.validateAmount(value)) {
      return;
    }

    this.balance += value;
    console.log("Deposit of R$", value, "made by", this.client.name);
    return value;
  }

  withdraw(value) {
    if (!this.validateAmount(value)) {
      return;
    }

    if (this.balance < value) {
      console.log("Insufficient funds");
      return;
    }

    this.balance -= value;
    console.log("Withdrawal of R$", value, "made by", this.client.name);
    return value;
  }

  transfer(destinationAccount, value) {
    if (!this.validateAmount(value)) {
      return;
    }

    if (this.balance < value) {
      console.log("Insufficient funds");
      return;
    }

    this.balance -= value;
    destinationAccount.balance += value;

    console.log(
      "Transfer of R$",
      value,
      "from",
      this.client.name,
      "to",
      destinationAccount.client.name
    );
    return value;
  }
}

export { Account };

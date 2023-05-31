class Account {
  constructor(client, agency, balance) {
    this.client = client;
    this.agency = agency;
    this.balance = 0;
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

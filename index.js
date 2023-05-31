class Client {
  constructor(name, cpf) {
    this.name = name;
    this.cpf = cpf;
  }
}

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

const client1 = new Client("Ricardo", 11122233309);
const client2 = new Client("Alice", 88822233309);

const accountClient1 = new Account(client1, 1001);
const accountClient2 = new Account(client2, 1002);

accountClient1.deposit(500);
accountClient1.deposit(100);
accountClient1.deposit(50);
accountClient1.deposit(0);

accountClient1.withdraw(400);

accountClient2.deposit(1000);
accountClient2.deposit(100);

accountClient2.withdraw(80);

console.log({
  name: accountClient1.client.name,
  balance: accountClient1.balance,
});
console.log({
  name: accountClient2.client.name,
  balance: accountClient2.balance,
});

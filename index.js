import { Client, Account } from "./modules/index.js";

let totalAccounts = 0;
let transferValue = 0;
let oldBalance = {};

const client1 = new Client("Ricardo", 11122233309);
const client2 = new Client("Alice", 88822233309);

const accountClient1 = new Account(client1, 1001, "SALARY");
totalAccounts++;

const accountClient2 = new Account(client2, 1002);
totalAccounts++;

accountClient1.deposit(500);
accountClient1.deposit(100);
accountClient1.deposit(50);
accountClient1.deposit(0);

accountClient1.withdraw(400);

accountClient2.deposit(1000);
accountClient2.deposit(100);

accountClient2.withdraw(80);

oldBalance = {
  from: {
    balance: accountClient1.balance,
  },
  to: {
    balance: accountClient2.balance,
  },
};

transferValue = 200;
const transference = accountClient1.transfer(accountClient2, transferValue);

console.log({
  transfer: {
    transferValue,
    status: !transference ? "failed" : transference.status,
    from: {
      name: accountClient1.client.name,
      lastBalance: oldBalance.from.balance,
      actualBalance: accountClient1.balance,
    },
    to: {
      name: accountClient2.client.name,
      lastBalance: oldBalance.to.balance,
      actualBalance: accountClient2.balance,
    },
  },
});
